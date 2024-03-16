import React from 'react';
import { BrowserRouter } from "react-router-dom"; 
import { render, screen, act } from '@testing-library/react';
import Navbar from './index';

jest.mock('../../api/region', () => ({
  getRegion: jest.fn(() => Promise.resolve({ data: [{ public_id: '1', city: 'City 1' }, { public_id: '2', city: 'City 2' }] })),
}));

describe('Navbar Component', () => {
  test('renders navbar component', async () => {
    await act(async () => {
      render( 
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });
    const navbarElement = await screen.findByTestId('navbar');
    expect(navbarElement).toBeInTheDocument()
  });

  test('renders navbar with correct logo', async () => {
    await act(async () => {
      render( 
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });
    const logoElement = await screen.findByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navbar with correct navigation links', async () => {
    await act(async () => {
      render( 
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });
    const loginLink = screen.getByTestId('login-link');
    const signupLink = screen.getByTestId('signup-link');
    expect(loginLink).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  test('renders navbar with correct region dropdown', async () => {
    await act(async () => {
      render( 
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });
    const regionDropdown = screen.getByTestId('region-select');
    expect(regionDropdown).toBeInTheDocument();
  });
});
