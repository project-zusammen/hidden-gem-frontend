import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

describe('Navbar Component', () => {
  test('renders Navbar component with default region', () => {
    render(<Navbar />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Your region: Jakarta/i)).toBeInTheDocument();
  });

  test('renders Navbar component with custom region', () => {
    const region = "Bandung"
    render(<Navbar region={region}/>);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(`Your region: ${region}`)).toBeInTheDocument();
  });
});
