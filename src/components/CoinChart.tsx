import React, { useEffect, useState } from 'react';
import { Coin, Currency, TimeInterval } from '../models/models';
import CoinSelect from './CoinSelect';
import Select from './common/Select';
import IntervalSelect from './IntervalSelect';
import LineChart from './LineChart';
import coingeckoApi from '../api/coingecko.api';

interface CoinChartProps {
  availableCoins: Coin[];
  availableCurrencies: Currency[];
  availableIntervals: TimeInterval[];
}

const CoinChart: React.FC<CoinChartProps> = ({ availableCoins, availableCurrencies, availableIntervals }) => {
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
    <div className="container mx-auto">
      <CoinSelect coins={availableCoins} onChange={setCoin} />
      <Select plainOptions={availableCurrencies} onChange={(value) => setCurrency(value as Currency)} />
      <IntervalSelect intervals={availableIntervals} onChange={setInterval} />
      <LineChart data={coinPrice} />
    </div>
  );
};

export default CoinChart;
