import { useMemo } from 'react';

export const useTotalStocksValue = (stocks) => {
  

//   Calculate total stock value
  const totalValue = useMemo(() => {
    return stocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
  }, [stocks]);

  return totalValue;
};
