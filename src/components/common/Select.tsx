import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultSelected?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          onChange={(event) => onChange(event.target.value)}
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Select"
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
