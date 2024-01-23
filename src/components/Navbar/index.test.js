import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

describe('Navbar Component', () => {
  test('renders Navbar component with default region', () => {
    render(<Navbar />);

    const logoElements = screen.queryAllByAltText('logo');
    expect(logoElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Your region: Jakarta/i)).toBeInTheDocument();
  });

  test('renders Navbar component with custom region', () => {
    const region = "Bandung"
    render(<Navbar region={region}/>);

    const logoElements = screen.queryAllByAltText('logo');
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(`Your region: ${region}`)).toBeInTheDocument();
  });
});
