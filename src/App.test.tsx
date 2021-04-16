import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mdn link', () => {
  render(<App />);
  const linkElement = screen.getByText(/MDN/i);
  expect(linkElement).toBeInTheDocument();
});
