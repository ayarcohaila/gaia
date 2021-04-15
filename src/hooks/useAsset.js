import { useState, useEffect, useCallback } from 'react';
import { getAsset } from '~/flow/getAsset';
import { getSaleOffer } from '~/flow/getSaleOffer';

export default function useAsset(assetId, userAddress) {
  const [isLoadingAsset, setIsLoadingAsset] = useState(true);
  const [asset, setAsset] = useState(null);

  const fetchAsset = useCallback(async () => {
    try {
      if (!userAddress && assetId) setIsLoadingAsset(true);
      setIsLoadingAsset(true);
      const fetchedAsset = await getAsset(userAddress, parseInt(assetId, 10));
      const [sale] = await getSaleOffer(userAddress, Number(assetId));
      const price = sale?.price;
      const owner = sale?.owner;
      const onSale = !!sale?.price;
      setAsset({ ...fetchedAsset, isSale: onSale, price, owner });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAsset(false);
    }
  }, [assetId, userAddress]);

  useEffect(fetchAsset, [fetchAsset]);

  return {
    asset,
    isLoadingAsset
  };
}
