import coingeckoApi from './api/coingecko.api';
import { useEffect, useState } from 'react';
import { Coin, Currency, TimeInterval } from './models/models';
import CoinInfoPanel from './components/CoinInfoPanel';

const currencyList: Currency[] = ['USD', 'EUR', 'GBP'];

const intervals: TimeInterval[] = [
  { days: 1, label: 'Day' },
  { days: 7, label: 'Week' },
  { days: 30, label: 'Month' },
  { days: 365, label: 'Year' },
  { days: 'max', label: 'All' },
];

const App = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    coingeckoApi.getCoinsList().then(setCoins);
  }, [setCoins]);

  return (
    <>
      <h1 className="font-medium text-5xl sm:text-7xl text-sky-500 text-center leading-tight mt-16 w-screen">
        Coingecko Reader
      </h1>
      <CoinInfoPanel availableCoins={coins} availableCurrencies={currencyList} availableIntervals={intervals} />;
    </>
  );
};

export default App;
