// footer/index.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 
import Footer from './index';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);
   
    expect(screen.getByText(/Crafted with passion by Team Evolvy/)).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });

  // Add more test cases as needed
});
