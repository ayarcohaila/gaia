import { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import preval from 'preval.macro';
import axios from 'axios';

import Asset from './asset';
import CollectionInfo from './collection-info';
import { buy } from '~/flow/buy';
import { useCollectionConfig, useBreakpoints, useAuth, useToggle } from '~/hooks';
import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  PurchaseErrorModal,
  PurchaseNFTModal,
  InsufficientFundsModal,
  OrderProcessing,
  Accordion,
  AdditionalDetails,
  BlockchainHistory,
  Breadcrumbs
} from '~/components';
import { Loader } from '~/base';

import { isDapper } from '~/utils/currencyCheck';
import { loadTransaction } from '~/utils/transactionsLoader';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';
import { hasSecondarySale } from '~/config/config';

import * as Styled from './styles';

const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const BUY_TX = isDapper
  ? preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../flow/transactions/dapper/buy.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
  `
  : preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../flow/transactions/flowToken/buy.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
  `;

const ProductDetailsTopSection = ({ nft, ballerzComputedProps, attributesOrder }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    push,
    asPath,
    query: { collection_name }
  } = useRouter();
  const { metadata } = nft.template;
  const { config } = useCollectionConfig();
  const { user, login } = useAuth();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [transaction, setTransaction] = useState(null);
  const [loadingSell, setLoadingSell] = useState(false);

  const isOwner = useMemo(() => nft?.owner === user?.addr, [nft?.owner, user?.addr]);

  const isForSale = useMemo(() => nft?.is_for_sale, [nft?.is_for_sale]);

  const handleLoadTransaction = useCallback(async () => {
    setLoadingPurchase(true);
    const tx = await loadTransaction(BUY_TX);
    setTransaction(tx);
    setLoadingPurchase(false);
  }, [loadTransaction, setLoadingPurchase, setTransaction]);

  useEffect(() => {
    handleLoadTransaction();
  }, [handleLoadTransaction]);

  const handlePurchaseClick = useCallback(
    async event => {
      event?.stopPropagation();
      try {
        setLoadingPurchase(true);
        toggleProcessingModal();
        const txResult = await buy(
          transaction.transactionScript,
          getLastByUpdateAt(nft.sale_offers)?.listing_resource_id,
          nft?.owner,
          getLastByUpdateAt(nft.sale_offers)?.price,
          user?.addr
        );
        if (txResult) {
          await axios.post('/api/update-transaction-status', {
            filters: {
              collection_id: { _eq: nft.collection_id },
              asset_id: { _eq: nft.asset_id },
              mint_number: { _eq: nft.mint_number }
            }
          });

          setPurchaseTxId(txResult?.txId);
          toggleProcessingModal();
          togglePurchaseNftModal();
          setLoadingPurchase(false);
        }
      } catch (err) {
        console.warn(err);
        toggleProcessingModal();
        if (err?.message?.includes(INSUFFICIENT_FUNDS)) {
          toggleFundsError();
        } else {
          togglePurchaseError();
        }
        setLoadingPurchase(false);
      }
    },
    [
      config,
      toggleProcessingModal,
      setLoadingPurchase,
      togglePurchaseError,
      toggleProcessingModal,
      togglePurchaseNftModal,
      transaction,
      user,
      nft
    ]
  );

  const handleCloseSellModal = useCallback(() => {
    push(asPath);
    toggleSellNftModal();
  }, [push, toggleSellNftModal]);

  const blockchainHistoryData = useMemo(
    () => ({
      creator: nft.collection.author,
      owner: nft.owner,
      mintDate: new Date(nft.created_at)?.getTime(),
      contract: process.env.NEXT_PUBLIC_NFT_CONTRACT
    }),
    [nft]
  );

  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Collections'
      },
      {
        label: `${nft?.collection?.name} NFTs`,
        href: `/${collection_name}`
      },
      {
        label: metadata.title,
        href: `/${collection_name}/${metadata?.id || nft?.mint_number}`
      }
    ],
    [nft?.collection]
  );

  const renderAccordions = useMemo(
    () => (
      <>
        <Accordion
          defaultExpanded
          dividerSx={{ mt: isMediumDevice ? 0 : 5 }}
          sx={{ my: 3, width: '100%' }}
          title="Properties">
          <AdditionalDetails
            data={metadata}
            ballerzComputedProps={ballerzComputedProps}
            attributesOrder={attributesOrder}
          />
        </Accordion>
        <Accordion
          defaultExpanded
          dividerSx={{
            margin: isSmallDevice ? '0 auto' : '0',
            width: isSmallDevice ? '90%' : 'auto'
          }}
          sx={{ mt: 3, width: '100%' }}
          title="Blockchain History">
          <BlockchainHistory data={blockchainHistoryData} />
        </Accordion>
      </>
    ),
    [blockchainHistoryData, isMediumDevice, isSmallDevice, metadata]
  );

  const renderActions = useMemo(() => {
    switch (true) {
      case nft?.transaction_status:
        return '';
      case loadingPurchase:
        return <Loader />;
      case isForSale && isOwner:
        return (
          <Styled.ActionButtons removeListing onClick={toggleCancelListingModal}>
            Remove Listing
          </Styled.ActionButtons>
        );
      case isForSale && !!transaction: {
        const price = Number(getLastByUpdateAt(nft?.sale_offers)?.price)?.toFixed(2);
        return (
          <Styled.ActionButtons
            disabled={loadingPurchase}
            onClick={user?.addr ? handlePurchaseClick : login}
            sx={{ width: '180px' }}>
            {`Purchase • $${price}`}
          </Styled.ActionButtons>
        );
      }
      case !isForSale && isOwner:
        return (
          <>
            <Styled.ActionButtons onClick={toggleSellNftModal}>Sell</Styled.ActionButtons>
            <Styled.ActionButtons onClick={toggleTransferNftModal}>Transfer</Styled.ActionButtons>
          </>
        );
      default:
        return '';
    }
  }, [
    isOwner,
    isForSale,
    loadingPurchase,
    transaction,
    handlePurchaseClick,
    getLastByUpdateAt,
    login,
    user?.addr,
    nft?.transaction_status
  ]);

  return (
    <>
      <Breadcrumbs links={breadcrumbsLinks} sx={{ mx: 1 }} />
      <Styled.Container container={!isMediumDevice} justifyContent="space-between">
        <Asset metadata={metadata} />
        <Grid
          alignItems={isMediumDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isMediumDevice ? '100%' : '45%'}>
          {!isMediumDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              <CollectionInfo name={nft?.collection?.name} />
            </Grid>
          )}
          <Styled.NumberContainer>
            <Typography color={grey[600]} variant="body1">
              #{metadata?.id || nft?.mint_number} / {metadata?.editions || config?.collectionSize}
            </Typography>
          </Styled.NumberContainer>
          <Grid alignItems={isMediumDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Styled.Title>{metadata.title}</Styled.Title>
            <Styled.Description>{metadata.description}</Styled.Description>
            {hasSecondarySale && (
              <Grid
                container
                sx={{ mt: '42px', gap: isSmallDevice ? '8px' : '16px' }}
                justifyContent={isMediumDevice && 'center'}>
                {renderActions}
              </Grid>
            )}
            {!!isMediumDevice && (
              <Box mt={5} width="100%">
                <Divider sx={{ border: '0', borderTop: `2px solid ${grey[200]}` }} />
                <Grid alignItems="center" container my="18px" px={2.5}>
                  <CollectionInfo name={nft?.collection?.name} />
                </Grid>
              </Box>
            )}
            {!isMediumDevice && renderAccordions}
          </Grid>
        </Grid>
        {!!isMediumDevice && renderAccordions}
      </Styled.Container>

      <PurchaseNFTModal
        asset={nft}
        open={isPurchaseNftModalOpen}
        onClose={togglePurchaseNftModal}
        tx={purchaseTxId}
      />
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <TransferNftModal
        asset={nft}
        open={isTransferNftModalOpen}
        onClose={toggleTransferNftModal}
      />
      <CancelListingModal
        asset={nft}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
      />
      <SellNftModal
        asset={nft}
        hasPostedForSale={nft?.is_for_sale}
        open={isSellNftModalOpen}
        onClose={handleCloseSellModal}
        setLoading={setLoadingSell}
        loading={loadingSell}
      />
    </>
  );
};

ProductDetailsTopSection.propTypes = {
  nft: PropTypes.object.isRequired
};

export default memo(ProductDetailsTopSection);
