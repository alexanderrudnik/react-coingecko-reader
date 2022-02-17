import { Currency } from './models/models';

// format according to the user locale
export const formatCurrency = (value: number, currency: Currency) => {
  const fixedValue = value.toFixed(0);
  switch (currency) {
    case 'USD':
      return `$${fixedValue}`;
    case 'EUR':
      return `€${fixedValue}`;
    case 'GBP':
      return `£${fixedValue}`;
    default:
      return fixedValue;
  }
};
