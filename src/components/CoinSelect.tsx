import React, { useEffect, useMemo, useState } from 'react';
import Select from './common/Select';
import { Coin } from '../models/models';
import coingeckoApi from '../api/coingecko.api';

interface CoinSelectProps {
  onChange: (coin: Coin) => void;
}

const CoinSelect: React.FC<CoinSelectProps> = ({ onChange }) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    coingeckoApi.getCoinsList().then((coins) => {
      setCoins(coins);
      onChange(coins[0]);
    });
  }, [onChange, setCoins]);

  const options = useMemo(
    () =>
      coins.map((coin) => ({
        value: coin.id,
        label: `${coin.name} (${coin.short})`,
      })),
    [coins],
  );

  const handleChange = (value: string) => {
    const coin = coins.find(({ id }) => id === value) as Coin;
    onChange(coin);
  };

  return <Select options={options} onChange={handleChange} />;
};

export default CoinSelect;
