import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import { getStore } from '../../store/store';
import App from './app';
import { server } from '../../mocks/server';
import { offer } from '../../mocks/data';
import { AppRoute } from '../../const';

const store = getStore();
const history = createMemoryHistory();
const mockStorage = {};
let setItemSpy;
let getItemSpy;
let scrollTopSpy;
let app;

describe('App component routing:', () => {
  beforeAll(() => {
    // Mock some browser APIs
    scrollTopSpy = jest.spyOn(window, 'scrollTo').mockImplementation();

    setItemSpy = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key, value) => {
        mockStorage[key] = value;
      });

    getItemSpy = jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation((key) => mockStorage[key]);

    server.listen();

    app = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  afterEach(() => server.resetHandlers());

  it('should correctly render /', async () => {
    const { getByText } = render(app);

    // loading should be on the main screen initially
    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();

    // loading should disappear
    await waitFor(() => expect(loadingElement).not.toBeInTheDocument());

    // Test offer should appear on the screen after loading
    expect(getByText(offer.title)).toBeInTheDocument();

  });

  it('should correctly render login screen', () => {
    history.push(AppRoute.LOGIN);
    const { getByRole } = render(app);

    expect(getByRole('button', { name: 'Sign in'})).toBeInTheDocument();

  });

  afterAll(() => {
    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
    scrollTopSpy.mockRestore();
    server.close();
  });
});
