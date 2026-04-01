import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrdersPage from '../page';
import * as shopifyAuth from '@/lib/api/shopify-auth';

vi.mock('@/lib/api', () => ({
  useOrders: vi.fn(),
}));

vi.mock('@/lib/api/shopify-auth', () => ({
  getSession: vi.fn(),
}));

const mockOrders = [
  {
    id: 1,
    name: '#1001',
    email: 'john@example.com',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    total_price: '100.00',
    currency: 'USD',
    financial_status: 'paid',
    fulfillment_status: 'fulfilled',
    status: 'completed',
    customer: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: null,
      addresses: [],
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
      orders_count: 1,
      total_spent: '100.00',
      tags: '',
    },
    line_items: [
      { id: 1, product_id: 1, variant_id: 1, title: 'Test Product', quantity: 1, price: '100.00' },
    ],
  },
  {
    id: 2,
    name: '#1002',
    email: 'jane@example.com',
    created_at: '2024-01-14T09:00:00Z',
    updated_at: '2024-01-14T09:00:00Z',
    total_price: '50.00',
    currency: 'USD',
    financial_status: 'paid',
    fulfillment_status: null,
    status: 'pending',
    customer: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane@example.com',
      phone: null,
      addresses: [],
      created_at: '2024-01-05T00:00:00Z',
      updated_at: '2024-01-14T09:00:00Z',
      orders_count: 1,
      total_spent: '50.00',
      tags: '',
    },
    line_items: [
      { id: 2, product_id: 2, variant_id: 2, title: 'Another Product', quantity: 2, price: '25.00' },
    ],
  },
  {
    id: 3,
    name: '#1003',
    email: 'bob@example.com',
    created_at: '2024-01-13T08:00:00Z',
    updated_at: '2024-01-13T08:00:00Z',
    total_price: '75.00',
    currency: 'USD',
    financial_status: 'paid',
    fulfillment_status: 'refunded',
    status: 'refunded',
    customer: {
      id: 3,
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob@example.com',
      phone: null,
      addresses: [],
      created_at: '2024-01-03T00:00:00Z',
      updated_at: '2024-01-13T08:00:00Z',
      orders_count: 1,
      total_spent: '0.00',
      tags: '',
    },
    line_items: [
      { id: 3, product_id: 3, variant_id: 3, title: 'Third Product', quantity: 1, price: '75.00' },
    ],
  },
];

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = 'OrdersQueryWrapper';
  return Wrapper;
};

describe('OrdersPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_orders',
    });
  });

  it('renders the page title and description', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: undefined, isLoading: true } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Manage and view your store orders')).toBeInTheDocument();
  });

  it('displays search input and status filter', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    expect(screen.getByPlaceholderText('Search orders...')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('displays order data in the table', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('#1001')).toBeInTheDocument();
    expect(screen.getByText('#1002')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('displays status badges in table', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    const badges = screen.getAllByText('Fulfilled');
    expect(badges.length).toBeGreaterThan(0);
    expect(screen.getAllByText('Unfulfilled').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Refunded').length).toBeGreaterThan(0);
  });

  it('filters orders by search query', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    const searchInput = screen.getByPlaceholderText('Search orders...');
    await userEvent.type(searchInput, 'John');

    expect(screen.getByText('#1001')).toBeInTheDocument();
    expect(screen.queryByText('#1002')).not.toBeInTheDocument();
  });

  it('filters orders by status', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'fulfilled');

    expect(screen.getByText('#1001')).toBeInTheDocument();
    expect(screen.queryByText('#1002')).not.toBeInTheDocument();
  });

  it('shows empty state when no orders match filters', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    const searchInput = screen.getByPlaceholderText('Search orders...');
    await userEvent.type(searchInput, 'nonexistent');

    expect(screen.getByText('No orders found')).toBeInTheDocument();
  });

  it('shows empty state when no orders exist', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: [], isLoading: false } as any);

    render(<OrdersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('No orders found')).toBeInTheDocument();
  });
});
