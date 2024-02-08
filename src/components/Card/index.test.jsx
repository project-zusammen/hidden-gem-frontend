import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeReviewCard from './index';
import { BrowserRouter as Router } from "react-router-dom";

test('renders RecipeReviewCard component', () => {
  render(
    <Router> 
      <RecipeReviewCard />
    </Router>
  );
  expect(screen.getByText(/Shrimp and Chorizo Paella/i)).toBeInTheDocument();
  expect(screen.getByText(/September 14, 2016/i)).toBeInTheDocument();
});

test('expands/collapses when clicking on "ExpandMore" button', () => {
  render(
    <Router> 
      <RecipeReviewCard />
    </Router>
  );
  expect(screen.queryByText(/Method:/i)).not.toBeInTheDocument();
});
