import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewCard from './index';

test('renders ReviewCard component', () => {
  render(<ReviewCard />);
  const cardTitle = screen.getByTestId('card-title');
  const cardText = screen.getByTestId('card-text');
  const upvotes = screen.getByTestId('upvotes');
  const detail = screen.getByTestId('detail');
  expect(cardTitle).toBeInTheDocument();
  expect(cardText).toBeInTheDocument();
  expect(upvotes).toBeInTheDocument();
  expect(detail).toBeInTheDocument();
});


