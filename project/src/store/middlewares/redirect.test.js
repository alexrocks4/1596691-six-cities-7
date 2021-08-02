import { ActionType } from '../action';
import { redirect } from './redirect';

let store;
let next;

const browserHistoryMock = { push: null };

jest.mock('../../browser-history', () => {
  browserHistoryMock.push = jest.fn();

  return browserHistoryMock;
});


describe('Redirect middleware', () => {
  beforeEach(() => {
    store = jest.fn();
    next = jest.fn();
  });

  it('should correctly behave on non-redirect action', () => {
    const action = {
      type: 'someAction',
      payload: '/fake',
    };

    redirect(store)(next)(action);

    expect(browserHistoryMock.push).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenNthCalledWith(1, action);
  });

  it('should correctly behave on redirect action', () => {
    const action = {
      type: ActionType.REDIRECTED_TO_ROUTE,
      payload: '/fake',
    };

    redirect(store)(next)(action);

    expect(browserHistoryMock.push).toHaveBeenNthCalledWith(1, action.payload);
    expect(next).toHaveBeenNthCalledWith(1, action);
  });
});
