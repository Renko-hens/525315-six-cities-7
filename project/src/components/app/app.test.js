import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app';

export const mockArray = [
  {
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4,
    favorite: false,
    premium: true,
  },
  {
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    favorite: true,
    premium: false,
  },
  {
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    favorite: false,
    premium: false,
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    favorite: false,
    premium: true,
  },
  {
    title: 'Wood wood weed place',
    price: 1000,
    rating: 5,
    type: 'Cozy',
    favorite: true,
    premium: false,
  },
];


test('Renders app-component', () => {
  render(<App places={mockArray} />);
  const textElement = screen.getByText(/Canal View Prinsengracht/i);
  expect(textElement).toBeInTheDocument();
});
