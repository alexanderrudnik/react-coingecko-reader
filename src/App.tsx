import coingeckoApi from './api/coingecko.api';
import { useEffect, useState } from 'react';
import { Coin, Currency, TimeInterval } from './models/models';
import CoinChart from './components/CoinChart';

const currencyList: Currency[] = ['USD', 'EUR', 'GBP'];

const intervals: TimeInterval[] = [
  { days: 1, label: '1d' },
  { days: 7, label: '1w' },
  { days: 30, label: '1m' },
  { days: 365, label: '1y' },
  { days: 'max', label: 'All' },
];

const App = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    coingeckoApi.getCoinsList().then(setCoins);
  }, [setCoins]);

  return <CoinChart availableCoins={coins} availableCurrencies={currencyList} availableIntervals={intervals} />;
};

export default App;
