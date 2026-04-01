import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import CustomerDetailPage from '../page';
import * as shopifyAuth from '@/lib/api/shopify-auth';

vi.mock('@/lib/api', () => ({
  useCustomer: vi.fn(),
}));

vi.mock('@/lib/api/shopify-auth', () => ({
  getSession: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

const mockCustomer = {
  id: 1,
  email: 'john@example.com',
  first_name: 'John',
  last_name: 'Doe',
  phone: '555-1234',
  addresses: [
    {
      first_name: 'John',
      last_name: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      province: 'CA',
      country: 'USA',
      zip: '90210',
      phone: '555-1234',
    },
  ],
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-15T10:00:00Z',
  orders_count: 3,
  total_spent: '450.00',
  tags: '',
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = 'CustomerDetailQueryWrapper';
  return Wrapper;
};

describe('CustomerDetailPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_customers',
    });
    vi.mocked(useParams).mockReturnValue({ id: '1' });
  });

  it('renders loading skeleton when loading', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: undefined, isLoading: true } as any);

    const { container } = render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders customer details when loaded', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: mockCustomer, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('displays contact info section', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: mockCustomer, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Anytown, CA 90210')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
  });

  it('displays lifetime value section', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: mockCustomer, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Lifetime Value')).toBeInTheDocument();
    expect(screen.getByText('$450.00')).toBeInTheDocument();
    expect(screen.getByText('Total spent across 3 orders')).toBeInTheDocument();
  });

  it('displays activity section', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: mockCustomer, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Activity')).toBeInTheDocument();
    expect(screen.getByText('First Order')).toBeInTheDocument();
    expect(screen.getByText('Last Order')).toBeInTheDocument();
    expect(screen.getByText('Total Orders')).toBeInTheDocument();
  });

  it('displays order history section', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: mockCustomer, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Order History')).toBeInTheDocument();
    expect(screen.getByText('Order history will be displayed here once orders are available via API.')).toBeInTheDocument();
  });

  it('displays not found state when customer is null', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: null, isLoading: false, error: null } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Customer not found')).toBeInTheDocument();
    expect(screen.getByText('Back to Customers')).toBeInTheDocument();
  });

  it('displays not found state on error', async () => {
    const { useCustomer } = await import('@/lib/api');
    vi.mocked(useCustomer).mockReturnValue({ data: null, isLoading: false, error: new Error('Not found') } as any);

    render(<CustomerDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Customer not found')).toBeInTheDocument();
  });
});
