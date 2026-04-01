import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardPage from '../page';
import * as shopifyAuth from '@/lib/api/shopify-auth';

vi.mock('@/lib/api', () => ({
  useOrders: vi.fn(),
  useCustomers: vi.fn(),
}));

vi.mock('@/lib/api/shopify-auth', () => ({
  getSession: vi.fn(),
}));

const mockOrders = [
  {
    id: 1,
    name: '#1001',
    email: 'test@example.com',
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
      email: 'test@example.com',
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
    email: 'test2@example.com',
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
      email: 'test2@example.com',
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
];

const mockCustomers = [
  {
    id: 1,
    email: 'test@example.com',
    first_name: 'John',
    last_name: 'Doe',
    phone: null,
    addresses: [],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    orders_count: 1,
    total_spent: '100.00',
    tags: '',
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
  Wrapper.displayName = 'DashboardQueryWrapper';
  return Wrapper;
};

describe('DashboardPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_orders',
    });
  });

  it('renders the page title and description', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: undefined, isLoading: true } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: undefined, isLoading: true } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Overview of your store performance')).toBeInTheDocument();
  });

  it('displays loading skeletons when data is loading', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: undefined, isLoading: true } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: undefined, isLoading: true } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('displays stat cards with correct data when loaded', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Orders (30d)')).toBeInTheDocument();
    expect(screen.getByText('Revenue (30d)')).toBeInTheDocument();
    expect(screen.getByText('AOV')).toBeInTheDocument();
    expect(screen.getByText('Active Customers')).toBeInTheDocument();
  });

  it('displays recent activity with orders', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
    expect(screen.getByText('Order #1001 — John Doe')).toBeInTheDocument();
    expect(screen.getByText('Order #1002 — Jane Smith')).toBeInTheDocument();
  });

  it('displays quick stats section', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Quick Stats')).toBeInTheDocument();
    expect(screen.getByText('Pending Orders')).toBeInTheDocument();
    expect(screen.getByText('Fulfilled Orders')).toBeInTheDocument();
    expect(screen.getByText('Refunded Orders')).toBeInTheDocument();
    expect(screen.getByText('Total Customers')).toBeInTheDocument();
  });

  it('shows empty state when no orders exist', async () => {
    const { useOrders, useCustomers } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: [], isLoading: false } as any);
    vi.mocked(useCustomers).mockReturnValue({ data: [], isLoading: false } as any);

    render(<DashboardPage />, { wrapper: createWrapper() });

    expect(screen.getByText('No recent orders')).toBeInTheDocument();
  });
});
