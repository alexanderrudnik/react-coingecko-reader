import React from 'react';
import Select from './common/Select';
import { TimeInterval } from '../models/models';

interface IntervalSelectProps {
  intervals: TimeInterval[];
  onChange: (interval: TimeInterval) => void;
  defaultSelected?: string;
}

const IntervalSelect: React.FC<IntervalSelectProps> = ({ intervals, onChange, defaultSelected }) => {
  const handleChange = (interval: string) => {
    const selected = intervals.find(
      ({ days }) => days === (typeof days === 'number' ? +interval : interval),
    ) as TimeInterval;

    onChange(selected);
  };

  const options = intervals.map(({ days, label }) => ({ value: days + '', label }));

  return <Select options={options} onChange={handleChange} label="Interval" defaultSelected={defaultSelected} />;
};

export default IntervalSelect;
