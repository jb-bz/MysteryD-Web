import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import OrderDetailPage from '../page';
import * as shopifyAuth from '@/lib/api/shopify-auth';

vi.mock('@/lib/api', () => ({
  useOrder: vi.fn(),
}));

vi.mock('@/lib/api/shopify-auth', () => ({
  getSession: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

const mockOrder = {
  id: 1,
  name: '#1001',
  email: 'john@example.com',
  created_at: '2024-01-15T10:00:00Z',
  updated_at: '2024-01-15T12:00:00Z',
  total_price: '125.00',
  currency: 'USD',
  financial_status: 'paid',
  fulfillment_status: 'fulfilled',
  status: 'completed',
  customer: {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
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
    orders_count: 1,
    total_spent: '125.00',
    tags: '',
  },
  line_items: [
    { id: 1, product_id: 1, variant_id: 1, title: 'Test Product', quantity: 1, price: '100.00' },
    { id: 2, product_id: 2, variant_id: 2, title: 'Second Product', quantity: 1, price: '25.00' },
  ],
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
  Wrapper.displayName = 'OrderDetailQueryWrapper';
  return Wrapper;
};

describe('OrderDetailPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_orders',
    });
    vi.mocked(useParams).mockReturnValue({ id: '1' });
  });

  it('renders loading skeleton when loading', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: undefined, isLoading: true } as any);

    const { container } = render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders order details when loaded', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: mockOrder, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('#1001')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('displays order line items', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: mockOrder, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Second Product')).toBeInTheDocument();
  });

  it('displays order summary section', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: mockOrder, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('Tax')).toBeInTheDocument();
  });

  it('displays customer section when customer exists', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: mockOrder, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Customer')).toBeInTheDocument();
    expect(screen.getByText('View Customer')).toBeInTheDocument();
  });

  it('displays timeline section', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: mockOrder, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Timeline')).toBeInTheDocument();
    expect(screen.getByText('Order Placed')).toBeInTheDocument();
  });

  it('displays not found state when order is null', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: null, isLoading: false, error: null } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Order not found')).toBeInTheDocument();
    expect(screen.getByText('Back to Orders')).toBeInTheDocument();
  });

  it('displays not found state on error', async () => {
    const { useOrder } = await import('@/lib/api');
    vi.mocked(useOrder).mockReturnValue({ data: null, isLoading: false, error: new Error('Not found') } as any);

    render(<OrderDetailPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Order not found')).toBeInTheDocument();
  });
});
