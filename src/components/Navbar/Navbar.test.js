import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

jest.mock('./index', () => ({
  ...jest.requireActual('./index'),
  getRegion: jest.fn(),
}));

test('renders navbar component', () => {
  render(<Navbar />);
  expect(Navbar).toHaveBeenCalledTimes(1);
});

test('renders navbar with correct logo', () => {
  render(<Navbar />);
  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();
  // Add additional assertions for the logo if needed
});

test('renders navbar with correct navigation links', () => {
  render(<Navbar />);
  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('Contact');
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  // Add additional assertions for the navigation links if needed
});

test('renders navbar with active link', () => {
  render(<Navbar />);
  const activeLink = screen.getByText('Home');
  expect(activeLink).toHaveClass('active');
  // Add additional assertions for the active link if needed
});


