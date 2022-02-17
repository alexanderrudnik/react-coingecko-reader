export interface Coin {
  id: string;
  name: string;
  short: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface TimeInterval {
  days: number | 'max';
  label: string;
}
