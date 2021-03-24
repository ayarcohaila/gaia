import { useState, useEffect, useCallback } from 'react';
import { getSales } from '~/flow/getSales';
import useAuth from '~/hooks/useAuth';

export default function useMarket() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const listSales = useCallback(async () => {
    if (user?.addr) {
      try {
        setIsLoading(true);
        const items = await getSales(user?.addr);
        setSales(items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [user?.addr]);

  useEffect(listSales, [listSales]);

  return {
    sales,
    isLoading
  };
}
