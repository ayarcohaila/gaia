/* eslint-disable no-console */
import { useState, useEffect, useCallback } from 'react';
import { getAsset } from '~/flow/getAsset';
import { getSaleOffer } from '~/flow/getSaleOffer';
import useProfile from './useProfile';

export default function useSale(saleID, userAddress) {
  const [sale, setSale] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userProfile } = useProfile(userAddress);
  const getSale = useCallback(async () => {
    console.log(userProfile, userAddress, saleID);
    if (!saleID || !userProfile) return setIsLoading(true);
    if (saleID && userProfile) {
      try {
        setIsLoading(true);
        const asset = await getAsset(userAddress, Number(saleID));
        const [{ price, owner }] = await getSaleOffer(userAddress, Number(saleID));
        setSale({ ...asset, ownerProfile: userProfile, price, owner });
        console.log({ ...asset, ownerProfile: userProfile, price, owner });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [saleID, userAddress, userProfile]);

  useEffect(getSale, [getSale]);

  return {
    sale,
    isLoading
  };
}
