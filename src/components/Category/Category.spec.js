import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Category from './index';

jest.mock('../../api/category', () => ({
  getCategory: jest.fn(() => Promise.resolve({ data: [{ public_id: '1', name: 'Category 1' }, { public_id: '2', name: 'Category 2' }] })),
}));

describe('Category Component', () => {
  it('renders tabs with categories', async () => {
    render(<Category />);

    await screen.findByTestId('category-tabs');

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  it('selects the first category by default', async () => {
    render(<Category />);

    const firstCategory = await screen.findByTestId('category-tab-1');
    const secondCategory = await screen.findByTestId('category-tab-2');

    expect(firstCategory).toHaveTextContent('Category 1');
    expect(firstCategory).toHaveAttribute('aria-selected', 'true');
    expect(secondCategory).toHaveAttribute('aria-selected', 'false');
  });

  it('changes selected category on tab click', async () => {
    render(<Category />);

    const categoryTab1 = await screen.findByTestId('category-tab-1');
    const categoryTab2 = await screen.findByTestId('category-tab-2');

    fireEvent.click(categoryTab2);

    expect(categoryTab2).toHaveAttribute('aria-selected', 'true');
    expect(categoryTab1).toHaveAttribute('aria-selected', 'false');
  });
});
