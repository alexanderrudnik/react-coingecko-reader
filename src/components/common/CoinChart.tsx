import React, { useMemo } from 'react';
import { Coin, Currency } from '../../models/models';
import LineChart from './LineChart';
import { formatCurrency } from '../../utils';

interface CoinChartProps {
  coin: Coin;
  currency: Currency;
  price: [number, number][];
  dateFormat: string;
}

const CoinChart: React.FC<CoinChartProps> = ({ coin, currency, price, dateFormat }) => {
  const title = useMemo(() => {
    return coin && price && price[price.length - 1]
      ? `${coin.short}, ${formatCurrency(price[price.length - 1][1], currency)}`
      : '';
  }, [coin, currency, price]);

  const subtitle = useMemo(() => {
    const firstPrice = price[0] && price[0][1];
    const actualPrice = price[price.length - 1] && price[price.length - 1][1];

    if (firstPrice && actualPrice) {
      const delta = (actualPrice - firstPrice) / 100;
      const sign = delta > 0 ? '+' : '-';

      return `${sign}${Math.abs(delta).toFixed(2)}% (${sign}${formatCurrency(
        Math.abs(actualPrice - firstPrice),
        currency,
      )})`;
    } else return '';
  }, [currency, price]);

  const valueFormatter = (value: number) => formatCurrency(value, currency);

  return (
    <LineChart title={title} subtitle={subtitle} data={price} dateFormat={dateFormat} valueFormatter={valueFormatter} />
  );
};

export default CoinChart;
