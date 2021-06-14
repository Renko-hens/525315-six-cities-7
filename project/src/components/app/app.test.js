import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders app-component', () => {
  render(<App />);
  const textElement = screen.getByText(/Canal View Prinsengracht/i);
  expect(textElement).toBeInTheDocument();
});
