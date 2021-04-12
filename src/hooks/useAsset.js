/* eslint-disable no-console */
import { useState, useEffect, useCallback } from 'react';
import { getAsset } from '~/flow/getAsset';
import useSale from '~/hooks/useSale';

export default function useAsset(assetId, userAddress) {
  const { sale } = useSale(assetId, userAddress);
  const [isLoading, setIsLoading] = useState(false);
  const [asset, setAsset] = useState(null);

  const fetchAsset = useCallback(async () => {
    try {
      if (userAddress) {
        setIsLoading(true);
        const fetchedAsset = await getAsset(userAddress, parseInt(assetId, 10));
        const isSale = sale !== [];
        setAsset({ ...fetchedAsset, isSale });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [assetId, userAddress]);

  useEffect(fetchAsset, [fetchAsset]);

  return {
    asset,
    isLoading
  };
}
