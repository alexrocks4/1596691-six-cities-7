import { rest } from 'msw';
import { res } from './res';
import { authInfo, TOKEN, offers, offer } from './data';
import { EndpointsAbsolutePath } from '../const';

export const handlers = [
  // login
  rest.post(EndpointsAbsolutePath.LOGIN, (req, _res, ctx) => {
    if (req.body.email && req.body.password) {
      return res(
        ctx.status(200),
        ctx.json(authInfo),
      );
    }

    return res(ctx.status(401));
  }),

  rest.get(EndpointsAbsolutePath.LOGIN, (req, _res, ctx) => {
    if (req.headers.get('x-token') === TOKEN) {
      return res(
        ctx.status(200),
        ctx.json(authInfo),
      );
    }

    return res(ctx.status(401));
  }),

  // logout
  rest.delete(EndpointsAbsolutePath.LOGIN, (_req, _res, ctx) => res(ctx.status(204))),

  // Offers
  rest.get(EndpointsAbsolutePath.OFFERS, (_req, _res, ctx) => (
    res(
      ctx.status(200),
      ctx.json(offers),
    )),
  ),

  // Offer
  rest.get(EndpointsAbsolutePath.OFFER, (req, _res, ctx) => (
    res(
      ctx.status(200),
      ctx.json({ ...offer, id: req.params.id }),
    )),
  ),

];
