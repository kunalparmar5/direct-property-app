import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import PropertyList from './PropertyList';
import { supabase } from '@/lib/supabase';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

// Mock Supabase client
jest.mock('@/lib/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnThis(),
        then: jest.fn(),
      })),
    })),
  },
}));

const mockProperties = [
  { id: '1', title: 'Property 1', description: 'Description 1', price: 100000, location: 'Location A', property_type: 'Type X', price_range: 'Budget 1' },
  { id: '2', title: 'Property 2', description: 'Description 2', price: 200000, location: 'Location B', property_type: 'Type Y', price_range: 'Budget 2' },
];

describe('PropertyList Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it('displays loading state', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnThis(),
        then: jest.fn().mockResolvedValue({ data: null, error: null }),
      })),
    });

    render(<PropertyList />);
    expect(screen.getByText('Loading properties...')).toBeInTheDocument();
  });

  it('displays error message', async () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnThis(),
        then: jest.fn().mockResolvedValue({ data: null, error: { message: 'Failed to fetch properties' } }),
      })),
    });

    render(<PropertyList />);
    expect(await screen.findByText('Error: Failed to fetch properties')).toBeInTheDocument();
  });

  it('displays properties on successful fetch', async () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn(() => ({
        eq: jest.fn().mockReturnThis(),
        then: jest.fn().mockResolvedValue({ data: mockProperties, error: null }),
      })),
    });

    render(<PropertyList />);
    expect(await screen.findByText('Property 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Property 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('filters properties based on search parameters', async () => {
    const searchParams = new URLSearchParams({ location: 'Location A', propertyType: 'Type X', budget: 'Budget 1' });
    (useSearchParams as jest.Mock).mockReturnValue(searchParams);

    const mockQuery = {
      eq: jest.fn().mockReturnThis(),
      then: jest.fn().mockResolvedValue({ data: [mockProperties[0]], error: null }),
    };
  
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn(() => mockQuery),
    });

    render(<PropertyList />);
    expect(await screen.findByText('Property 1')).toBeInTheDocument();
    expect(screen.queryByText('Property 2')).not.toBeInTheDocument();
    
    expect(mockQuery.eq).toHaveBeenCalledWith("location", "Location A");
    expect(mockQuery.eq).toHaveBeenCalledWith("property_type", "Type X");
    expect(mockQuery.eq).toHaveBeenCalledWith("price_range", "Budget 1");
  });
});