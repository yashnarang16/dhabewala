import { rest } from 'msw';
import { MOCK_API_URL } from './constants';
import { MOCKMEALS } from './mockMeals';

export const handlers = [
  rest.get(`${MOCK_API_URL}/get-all-meals`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCKMEALS));
  }),
];
