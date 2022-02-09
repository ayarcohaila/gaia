import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import { useAuthContext } from '~/providers/AuthProvider';
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where
} from '@firebase/firestore';
import { FsNflAllDayMoment } from '~/api/models/fsNflAllDayMoment';
import { CircularProgress } from '@mui/material';
import { usePendingOperations } from '~/providers/PendingOperationsProvider';
import { PurchaseNflModal } from '~/components/modal/nfl/purchaseNfl';
import { ASSET_TYPES_LOOKUP, generatePlayMediaUrl } from '~/utils/nftImage';

type Props = {
  editionId: number;
};

export default function GridOffers(props: Props) {
  const { user, login } = useAuthContext();
  const [listings, setListings] = useState<FsNflAllDayMoment[] | undefined>(undefined);
  const { pendingOperations } = usePendingOperations();
  const [purchaseNft, setPurchaseNft] = useState<FsNflAllDayMoment | undefined>(undefined);

  const buy = (nft: FsNflAllDayMoment) => {
    setPurchaseNft(nft);
  };

  const columns = [
    {
      field: 'activeListingPrice',
      headerName: 'USD',
      sortable: false,
      editable: false,
      width: 100,
      headerClassName: 'remove-outline',
      cellClassName: 'blue-text remove-outline',
      renderCell: (item: any) => {
        return `$${formatCurrencyValue(item.value)}`;
      }
    },
    {
      field: 'serialNumber',
      headerName: 'Serial',
      sortable: false,
      editable: false,
      headerClassName: 'remove-outline',
      cellClassName: 'remove-outline',
      renderCell: (item: any) => {
        return `#${item.value}`;
      }
    },
    {
      field: 'activeListingOrderAddress',
      headerName: 'From',
      sortable: false,
      editable: false,
      width: 200,
      headerClassName: 'remove-outline',
      cellClassName: 'remove-outline'
    },
    {
      field: 'action',
      headerName: '',
      sortable: false,
      editable: false,
      headerClassName: 'remove-outline',
      cellClassName: 'remove-outline',
      renderCell: (item: { row: FsNflAllDayMoment }) => {
        const hasPendingOperation = pendingOperations.find(o =>
          o.affectedNfts.find(n => n.nftType === 'nfl_all_day' && n.nftId === item.row.momentId)
        );

        return hasPendingOperation ? (
          <CircularProgress />
        ) : user?.addr === item.row.owner ? (
          <>Your listing</>
        ) : (
          <Styled.CustomButton variant="contained" onClick={() => (user ? buy(item.row) : login())}>
            Buy
          </Styled.CustomButton>
        );
      }
    }
  ];

  useEffect(() => {
    const subscriptions: Unsubscribe[] = [];

    const db = getFirestore();
    const listingsQuery = query(
      collection(db, 'nflAllDayMoments'),
      where('editionId', '==', props.editionId),
      where('activeListingPrice', '>', 0),
      orderBy('activeListingPrice', 'asc')
    );

    subscriptions.push(
      onSnapshot(listingsQuery, querySnapshot => {
        const listings: FsNflAllDayMoment[] = [];

        querySnapshot.forEach(doc => {
          listings.push(doc.data() as FsNflAllDayMoment);
        });

        setListings(listings);
      })
    );

    return () => subscriptions.forEach(unsubscribe => unsubscribe());
  }, [props.editionId]);

  return (
    <>
      <Styled.GridContainer style={{ width: '100%', height: 400, marginBottom: 16 }}>
        {listings ? (
          listings.length ? (
            <Styled.OffersDataGrid
              rows={listings}
              getRowId={row => row.momentId}
              columns={columns}
              disableColumnMenu={true}
              disableColumnSelector={true}
              hideFooter={true}
              disableVirtualization={true}
            />
          ) : (
            <Styled.CentralizedContent>
              There are no moments for sale for this edition
            </Styled.CentralizedContent>
          )
        ) : (
          <Styled.CentralizedContent>
            <CircularProgress />
          </Styled.CentralizedContent>
        )}
      </Styled.GridContainer>
      {purchaseNft ? (
        <PurchaseNflModal
          show={true}
          assetImage={generatePlayMediaUrl(
            purchaseNft.play.externalId!,
            purchaseNft.set.name,
            ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
            { width: 180, height: 180 }
          )}
          moment={purchaseNft}
          orderId={purchaseNft.activeListingOrderId!}
          orderAddress={purchaseNft.activeListingOrderAddress!}
          price={purchaseNft.activeListingPrice!}
          onClose={() => setPurchaseNft(undefined)}
        />
      ) : null}
    </>
  );
}
