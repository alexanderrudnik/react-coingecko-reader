export interface Coin {
  id: string;
  name: string;
  short: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export type Days = 1 | 7 | 30 | 365 | 'max';

export interface TimeInterval {
  days: Days;
  label: string;
}
