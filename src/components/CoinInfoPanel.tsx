import React, { useEffect, useState } from 'react';
import { Coin, Currency, Days, TimeInterval } from '../models/models';
import CoinSelect from './CoinSelect';
import Select from './common/Select';
import IntervalSelect from './IntervalSelect';
import coingeckoApi from '../api/coingecko.api';
import CoinChart from './common/CoinChart';

interface CoinChartProps {
  availableCoins: Coin[];
  availableCurrencies: Currency[];
  availableIntervals: TimeInterval[];
}

const formatMapper: { [key in Days]: string } = {
  1: 'HH:MM',
  7: 'ddd',
  30: 'MMM D',
  365: 'MMM, YYYY',
  max: 'MMM, YYYY',
};

const CoinInfoPanel: React.FC<CoinChartProps> = ({ availableCoins, availableCurrencies, availableIntervals }) => {
  const [coin, setCoin] = useState<Coin>(availableCoins[0]);
  const [currency, setCurrency] = useState<Currency>(availableCurrencies[0]);
  const [interval, setInterval] = useState<TimeInterval>(availableIntervals[0]);

  const [coinPrice, setCoinPrice] = useState<[number, number][]>([]);

  useEffect(() => {
    setCoin(coin || availableCoins[0]);
  }, [availableCoins, coin]);

  useEffect(() => {
    if (coin && currency && interval) {
      coingeckoApi.getData(coin.id, currency, interval.days).then((res) => {
        setCoinPrice(res.prices);
      });
    }
  }, [coin, currency, interval]);

  return (
    <div className="container mx-auto my-auto">
      <div className="block p-6 rounded-lg shadow-lg bg-gray-50">
        <div className="text-gray-700 text-base mb-4">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Coins
            <CoinSelect coins={availableCoins} onChange={setCoin} />
          </label>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Currency
            <Select plainOptions={availableCurrencies} onChange={(value) => setCurrency(value as Currency)} />
          </label>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Interval
            <IntervalSelect intervals={availableIntervals} onChange={setInterval} />
          </label>

          <CoinChart price={coinPrice} coin={coin} currency={currency} dateFormat={formatMapper[interval.days]} />
        </div>
      </div>
    </div>
  );
};

export default CoinInfoPanel;