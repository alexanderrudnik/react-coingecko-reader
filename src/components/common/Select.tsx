import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options?: Option[];
  plainOptions?: string[];
  onChange: (value: string) => void;
  defaultSelected?: string | number;
  label: string;
}

const Select: React.FC<SelectProps> = ({ options, plainOptions, onChange, label }) => {
  const optionsToRender = plainOptions ? plainOptions.map((opt) => ({ value: opt, label: opt })) : options || [];

  return (
    <div className="mb-3 w-72 sm:w-96">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
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
            focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-none"
          aria-label="Select"
        >
          {optionsToRender.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
