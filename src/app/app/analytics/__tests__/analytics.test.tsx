import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AnalyticsPage from '../page';
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
    customer: null,
    line_items: [
      { id: 1, product_id: 1, variant_id: 1, title: 'Product A', quantity: 2, price: '50.00' },
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
    fulfillment_status: 'fulfilled',
    status: 'completed',
    customer: null,
    line_items: [
      { id: 2, product_id: 2, variant_id: 2, title: 'Product B', quantity: 1, price: '50.00' },
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
    fulfillment_status: 'fulfilled',
    status: 'completed',
    customer: null,
    line_items: [
      { id: 3, product_id: 1, variant_id: 1, title: 'Product A', quantity: 1, price: '50.00' },
      { id: 4, product_id: 3, variant_id: 3, title: 'Product C', quantity: 1, price: '25.00' },
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
  Wrapper.displayName = 'AnalyticsQueryWrapper';
  return Wrapper;
};

describe('AnalyticsPage', () => {
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

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Track your store performance')).toBeInTheDocument();
  });

  it('displays period selector buttons', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('30d')).toBeInTheDocument();
    expect(screen.getByText('60d')).toBeInTheDocument();
    expect(screen.getByText('90d')).toBeInTheDocument();
  });

  it('displays stat cards', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Revenue (30d)')).toBeInTheDocument();
    expect(screen.getByText('Orders (30d)')).toBeInTheDocument();
    expect(screen.getByText('Average Order Value')).toBeInTheDocument();
  });

  it('displays revenue over time section', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Revenue Over Time')).toBeInTheDocument();
  });

  it('displays orders over time section', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Orders Over Time')).toBeInTheDocument();
  });

  it('displays top products section', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Top Products by Revenue')).toBeInTheDocument();
  });

  it('shows empty state when no orders', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: [], isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    expect(screen.getByText('No revenue data for this period')).toBeInTheDocument();
    expect(screen.getByText('No order data for this period')).toBeInTheDocument();
    expect(screen.getByText('No product data for this period')).toBeInTheDocument();
  });

  it('changes period when clicking period buttons', async () => {
    const { useOrders } = await import('@/lib/api');
    vi.mocked(useOrders).mockReturnValue({ data: mockOrders, isLoading: false } as any);

    render(<AnalyticsPage />, { wrapper: createWrapper() });

    const sixtyDayButton = screen.getByText('60d');
    await userEvent.click(sixtyDayButton);

    expect(screen.getByText('Revenue (60d)')).toBeInTheDocument();
    expect(screen.getByText('Orders (60d)')).toBeInTheDocument();
  });
});
