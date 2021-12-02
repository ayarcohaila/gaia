import { memo, useMemo } from 'react';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Asset from './asset';
import CollectionInfo from './collection-info';
import { useCollectionConfig, useBreakpoints, useAuth } from '~/hooks';
import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs } from '~/components';

import * as Styled from './styles';

const ProductDetailsTopSection = ({ nft, ballerzComputedProps, attributesOrder }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    query: { collection_name }
  } = useRouter();
  const { metadata } = nft.template;
  const { config } = useCollectionConfig();
  const { user } = useAuth();

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

  const isOwner = useMemo(() => nft?.owner === user?.addr, [user?.addr]);

  const isForSale = nft?.is_for_sale;

  const renderActions = useMemo(() => {
    if (isForSale && isOwner) {
      return <Styled.ActionButtons removeListing>Remove Listing</Styled.ActionButtons>;
    }

    if (isForSale && !isOwner) {
      const price = Number(nft?.sale_offers?.[0]?.price).toFixed(2);
      return (
        <Styled.ActionButtons sx={{ width: '180px' }}>{`Purchase $${price}`}</Styled.ActionButtons>
      );
    }

    if (!isForSale && isOwner) {
      return (
        <>
          <Styled.ActionButtons>Sell</Styled.ActionButtons>
          <Styled.ActionButtons>Transfer</Styled.ActionButtons>
        </>
      );
    }
    return '';
  }, [isOwner, isForSale]);

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
            {/* TODO: Refactor for backend total number */}
            <Typography color={grey[600]} variant="body1">
              #{metadata?.id || nft?.mint_number} / {config?.collectionSize}
            </Typography>
          </Styled.NumberContainer>
          <Grid alignItems={isMediumDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Styled.Title>{metadata.title}</Styled.Title>
            <Styled.Description>{metadata.description}</Styled.Description>
            {(isForSale || isOwner) && (
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
    </>
  );
};

ProductDetailsTopSection.propTypes = {
  nft: PropTypes.object.isRequired
};

export default memo(ProductDetailsTopSection);
