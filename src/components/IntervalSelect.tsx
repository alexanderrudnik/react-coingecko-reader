import React from 'react';
import Select from './common/Select';
import { TimeInterval } from '../models/models';

interface IntervalSelectProps {
  intervals: TimeInterval[];
  onChange: (interval: TimeInterval) => void;
}

const IntervalSelect: React.FC<IntervalSelectProps> = ({ intervals, onChange }) => {
  const handleChange = (interval: string) => {
    const selected = intervals.find(
      ({ days }) => days === (typeof days === 'number' ? +interval : interval),
    ) as TimeInterval;

    onChange(selected);
  };

  const options = intervals.map(({ days, label }) => ({ value: days + '', label }));

  return <Select options={options} onChange={handleChange} />;
};

export default IntervalSelect;
