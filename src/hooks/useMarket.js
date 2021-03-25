import { useState, useEffect, useCallback } from 'react';
import { getSales } from '~/flow/getSales';

export default function useMarket(address) {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const listSales = useCallback(async () => {
    if (address) {
      try {
        setIsLoading(true);
        const items = await getSales(address);
        setSales(items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [address]);

  useEffect(listSales, [listSales]);

  return {
    sales,
    isLoading
  };
}
