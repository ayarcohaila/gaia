import { memo, useState, useEffect, useCallback, useMemo, MouseEventHandler } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { buy } from '~/flow/buy';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import useToggle from '~/hooks/useToggle';
import useBreakpoints from '~/hooks/useBreakpoints';
import AdditionalDetails from '~/components/productDetails/defaultDetails/additionalDetails';
import BlockchainHistory from '~/components/productDetails/defaultDetails/blockchainHistory';
import Breadcrumbs from '~/components/breadcrumbs';
import Loader from '~/base/spinnerLoader';
import { loadTransaction } from '~/utils/transactionsLoader';
import { cancelSale } from '~/flow/cancelSale';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';
import { hasSell, hasTransfer } from '~/config/config';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { BUY_TX, CANCEL_SALE_TX } from '~/constant';
import { COLLECTION_LIST_CONFIG, COLLECTIONS_NAME } from '~/../collections_setup';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

const Accordion = dynamic(() => import('~/components/accordion'));
const SuccessPurchaseNFTModal = dynamic(() => import('~/components/modal/successPurchase'));
const OrderProcessing = dynamic(() => import('~/components/modal/orderProcessing'));
const InsufficientFundsModal = dynamic(() => import('~/components/modal/insufficientFunds'));
const TransferNftModal = dynamic(() => import('~/components/modal/transferNft'));
const SellNftModal = dynamic(() => import('~/components/modal/sellNft'));
const CancelListingModal = dynamic(() => import('~/components/modal/cancelListing'));
const PurchaseErrorModal = dynamic(() => import('~/components/modal/purchaseError'));

import * as Styled from './styles';
import Asset from './asset';
import CollectionInfo from './collectionInfo';
import { ProductDetailsTopSectionProps } from './types';
import ShareButton from '~/components/shareButton';
import FavoriteButton from '~/components/favoriteButton';
import { useAuthContext } from '~/providers/AuthProvider';

export const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const ProductDetailsTopSection = ({
  nft,
  computedProps,
  attributesOrder,
  hasMultipleOffers
}: ProductDetailsTopSectionProps) => {
  const asset = {
    ...nft,
    img: formatIpfsImg(nft?.template?.metadata?.img)
  };
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    push,
    asPath,
    query: { collection_name }
  } = useRouter();
  const metadata = nft.template?.metadata;
  const { config } = useCollectionConfig();
  const { user, login, isAuthLoading } = useAuthContext();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [transaction, setTransaction] = useState<any>(null);
  const [loadingSell, setLoadingSell] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);

  const LIMIT_PURCHASE = 2000000;

  const isOwner = useMemo(() => nft?.owner === user?.addr, [nft?.owner, user?.addr]);

  const isForSale = useMemo(() => nft?.has_sale_offers, [nft?.has_sale_offers]);

  const handleLoadTransaction = useCallback(async () => {
    setLoadingPurchase(true);
    const tx = await loadTransaction(BUY_TX);
    setTransaction(tx);
    setLoadingPurchase(false);
  }, [loadTransaction, setLoadingPurchase, setTransaction]);

  useEffect(() => {
    handleLoadTransaction();
  }, [handleLoadTransaction]);

  const handleCancelListing: MouseEventHandler<HTMLButtonElement> = async event => {
    event.stopPropagation();
    try {
      setLoadingCancel(true);
      const transaction = await loadTransaction(CANCEL_SALE_TX);
      const txResult = await cancelSale(transaction.transactionScript, asset?.asset_id);
      if (txResult) {
        setLoadingCancel(false);
        push(asPath);
      }
    } catch (err) {
      setLoadingCancel(false);
      console.error(err);
    }
  };

  const handlePurchaseClick = useCallback(
    async event => {
      event?.stopPropagation();
      try {
        setLoadingPurchase(true);
        toggleProcessingModal();
        const txResult = await buy(
          transaction.transactionScript,
          getLastByUpdateAt(nft?.sale_offers.filter(item => item.status === 'active'))
            ?.listing_resource_id,
          nft?.owner,
          getLastByUpdateAt(nft?.sale_offers.filter(item => item.status === 'active'))?.price,
          user?.addr
        );
        if (txResult) {
          setPurchaseTxId(txResult?.txId);
          toggleProcessingModal();
          togglePurchaseNftModal();
          setLoadingPurchase(false);
        }
      } catch (err_) {
        const err: any | undefined = err_;
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
      creator: nft.collection?.author,
      owner: nft.owner,
      mintDate: new Date(nft.minted_at)?.getTime(),
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
        <Styled.AcordionWrapper>
          <Accordion
            defaultExpanded
            dividerSx={{ mt: isMediumDevice ? 0 : 5 }}
            my={3}
            title="Properties"
            hasDivider={undefined}
            contentSx={undefined}
            id="propsAccordion">
            <AdditionalDetails
              data-cy="aditional-detail-properties"
              data={metadata}
              ballerzComputedProps={computedProps}
              attributesOrder={attributesOrder}
            />
          </Accordion>
        </Styled.AcordionWrapper>
        <Styled.AcordionWrapper>
          <Accordion
            data-cy="aditional-detail-history"
            defaultExpanded
            dividerSx={{
              margin: isSmallDevice ? '0 auto' : '0',
              width: isSmallDevice ? '100%' : 'auto'
            }}
            mt={3}
            title="Blockchain History"
            contentSx={undefined}
            hasDivider={undefined}
            id="blockHistoryAccordion">
            <BlockchainHistory
              data={{
                ...blockchainHistoryData,
                creator: blockchainHistoryData.creator || '',
                contract: blockchainHistoryData.contract || ''
              }}
            />
          </Accordion>
        </Styled.AcordionWrapper>
      </>
    ),
    [blockchainHistoryData, isMediumDevice, isSmallDevice, metadata]
  );

  const renderActions = useMemo(() => {
    const hasOffersActive = nft?.sale_offers.some(item => item.status === 'active');
    const price = getLastByUpdateAt(nft?.sale_offers)?.price;
    const formattedPrice = formatCurrencyValue(price);

    switch (true) {
      case nft.collection_id === COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF_AIRDROP].id:
        return null;
      case loadingPurchase:
        return <Loader />;
      case isForSale && isOwner && hasOffersActive: {
        return (
          <Styled.ActionButtons
            data-cy="action-button-remove-listing"
            sx={{ width: 250 }}
            removeListing
            onClick={toggleCancelListingModal}>
            Remove $ {formattedPrice} Listing
          </Styled.ActionButtons>
        );
      }
      case !isForSale && isOwner:
        return (
          <>
            {hasSell && (
              <Styled.ActionButtons data-cy="sell-button" onClick={toggleSellNftModal}>
                Sell
              </Styled.ActionButtons>
            )}
            {hasTransfer && (
              <Styled.TransferButton data-cy="transfer-button" onClick={toggleTransferNftModal}>
                Transfer
              </Styled.TransferButton>
            )}
          </>
        );
      case !!isForSale && !!transaction && hasOffersActive && Number(price) <= LIMIT_PURCHASE: {
        return (
          <Styled.PurchaseButton
            data-cy="action-button-purchase"
            disabled={loadingPurchase}
            onClick={user?.addr ? handlePurchaseClick : login}>
            {`Purchase \n$${formattedPrice}`}
          </Styled.PurchaseButton>
        );
      }
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
    nft?.transaction_status,
    hasSell,
    hasTransfer
  ]);

  const nftIdentifier =
    nft.collection_id === COLLECTION_LIST_CONFIG.shareef.id
      ? nft.asset_id
      : metadata?.id || nft?.mint_number;

  const collectionInfoName =
    nft.collection_id === COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF_AIRDROP].id
      ? COLLECTION_LIST_CONFIG.shareef.pageTitle
      : nft?.collection?.name;

  return (
    <>
      <Breadcrumbs data-cy="breadcrumbs" links={breadcrumbsLinks} mx={1} />
      <Styled.Container container={!isMediumDevice} justifyContent="space-between">
        <Asset metadata={metadata} />
        <Grid
          alignItems={isMediumDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isMediumDevice ? '100%' : '45%'}>
          {!isMediumDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              <CollectionInfo name={collectionInfoName || ''} nftId={nft.id} />
            </Grid>
          )}
          <Styled.NumberContainer data-cy="asset-number">
            <Typography color={grey[600]} variant="body1">
              #{metadata?.id || nft?.mint_number} / {metadata?.editions || config?.collectionSize}
            </Typography>
          </Styled.NumberContainer>
          <Grid alignItems={isMediumDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Styled.Title data-cy="asset-title">{metadata.title}</Styled.Title>
            <Styled.Description data-cy="asset-description">
              {metadata.description}
            </Styled.Description>
            {(hasSell || hasTransfer) && (
              <Grid
                container
                mt={'42px'}
                mb={!isMediumDevice ? '40px' : undefined}
                justifyContent={isMediumDevice ? 'center' : ''}
                alignItems="center">
                {!isAuthLoading && renderActions}
                {isOwner && hasMultipleOffers && (
                  <Styled.MultipleListing onClick={handleCancelListing} disabled={loadingCancel}>
                    {loadingCancel ? <Loader /> : 'Remove All Listings'}
                  </Styled.MultipleListing>
                )}
              </Grid>
            )}
            {isOwner && hasMultipleOffers && (
              <Styled.MultipleDescription mt={'20px'}>
                <Grid component={'span'} sx={{ color: 'red' }}>
                  Multiple Listings Detected
                </Grid>{' '}
                - It appears that you may have listed this NFT for sale multiple times, we strongly
                recommend you cancel all active listings to prevent any issues
              </Styled.MultipleDescription>
            )}

            {isMediumDevice && (
              <Grid flexDirection="row" container width="auto" mt="32px">
                <ShareButton />
                <FavoriteButton nftId={nft.id} />
              </Grid>
            )}

            {!!isMediumDevice && (
              <Box mt={5} width="100%">
                <Styled.Divider />
                <Grid alignItems="center" container my="18px" px={2.5}>
                  <CollectionInfo name={nft?.collection?.name || ''} nftId={nft.id} />
                </Grid>
              </Box>
            )}
            {!isMediumDevice && renderAccordions}
          </Grid>
        </Grid>
        {!!isMediumDevice && renderAccordions}
      </Styled.Container>

      <SuccessPurchaseNFTModal
        open={isPurchaseNftModalOpen}
        onClose={togglePurchaseNftModal}
        tx={purchaseTxId}
        collectionsName={`${nft?.collection?.name} #${nftIdentifier}`}
      />
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <TransferNftModal
        asset={asset}
        open={isTransferNftModalOpen}
        onClose={toggleTransferNftModal}
      />
      <CancelListingModal
        asset={asset}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
        onConfirm={undefined}
      />
      <SellNftModal
        asset={asset}
        hasPostedForSale={nft?.has_sale_offers}
        open={isSellNftModalOpen}
        onClose={handleCloseSellModal}
        setLoading={setLoadingSell}
        loading={loadingSell}
        collectionId={nft?.collection_id}
        onConfirm={undefined}
      />
    </>
  );
};

export default memo(ProductDetailsTopSection);
