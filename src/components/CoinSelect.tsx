import React, { useMemo } from 'react';
import Select from './common/Select';
import { Coin } from '../models/models';

interface CoinSelectProps {
  coins: Coin[];
  onChange: (coin: Coin) => void;
}

const CoinSelect: React.FC<CoinSelectProps> = ({ coins, onChange }) => {
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
