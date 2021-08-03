import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const memoryHistory = createMemoryHistory();
    const statusCode = 404;

    const { getByText, getByRole } = render(
      <Router history={memoryHistory}>
        <NotFound statusCode={statusCode} />
      </Router>,
    );

    const messageElement = getByText('Sorry, no such page!');
    const errorElement = getByText('Error: 404');
    const homeLinkElement = getByRole('link', { name: 'Back to home' });
    const logoLinkElement = getByRole('link', { name: '6 cities logo' });

    expect(messageElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
    expect(homeLinkElement).toBeInTheDocument();
    expect(logoLinkElement).toBeInTheDocument();
  });
});
