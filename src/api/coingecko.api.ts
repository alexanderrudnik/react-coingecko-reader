import axios from 'axios';
import { coins } from './mocks';
import { Coin } from '../models/coin';

export default {
  getData: (projectId: string, currency: string, numberOfDays: number) =>
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${projectId}/market_chart?vs_currency=${currency}&days=${numberOfDays}`,
      )
      .then((res) => res.data)
      .catch((err) => Promise.reject('Error getting data: ' + err.message)),

  // get some predefined data instead of real 10k+ coins
  getCoinsList: (): Promise<Coin[]> =>
    new Promise((res) => {
      setTimeout(res, 100, coins);
    }),
};
