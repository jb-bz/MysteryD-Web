import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomersPage from '../page';
import * as shopifyAuth from '@/lib/api/shopify-auth';

vi.mock('@/lib/api', () => ({
  useCustomers: vi.fn(),
}));

vi.mock('@/lib/api/shopify-auth', () => ({
  getSession: vi.fn(),
}));

const mockCustomers = [
  {
    id: 1,
    email: 'john@example.com',
    first_name: 'John',
    last_name: 'Doe',
    phone: null,
    addresses: [],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    orders_count: 3,
    total_spent: '450.00',
    tags: '',
  },
  {
    id: 2,
    email: 'jane@example.com',
    first_name: 'Jane',
    last_name: 'Smith',
    phone: '555-1234',
    addresses: [],
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-14T09:00:00Z',
    orders_count: 1,
    total_spent: '50.00',
    tags: '',
  },
  {
    id: 3,
    email: 'bob@example.com',
    first_name: 'Bob',
    last_name: 'Jones',
    phone: null,
    addresses: [],
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-13T08:00:00Z',
    orders_count: 0,
    total_spent: '0.00',
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
  Wrapper.displayName = 'CustomersQueryWrapper';
  return Wrapper;
};

describe('CustomersPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_customers',
    });
  });

  it('renders the page title and description', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: undefined, isLoading: true } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('Customers')).toBeInTheDocument();
    expect(screen.getByText('View and manage your customers')).toBeInTheDocument();
  });

  it('displays search input', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    expect(screen.getByPlaceholderText('Search by name or email...')).toBeInTheDocument();
  });

  it('displays customer data in the table', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Jones')).toBeInTheDocument();
  });

  it('displays customer emails', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('filters customers by search query', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    const searchInput = screen.getByPlaceholderText('Search by name or email...');
    await userEvent.type(searchInput, 'Jane');

    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });

  it('shows empty state when no customers match search', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: mockCustomers, isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    const searchInput = screen.getByPlaceholderText('Search by name or email...');
    await userEvent.type(searchInput, 'nonexistent');

    expect(screen.getByText('No customers found')).toBeInTheDocument();
  });

  it('shows empty state when no customers exist', async () => {
    const { useCustomers } = await import('@/lib/api');
    vi.mocked(useCustomers).mockReturnValue({ data: [], isLoading: false } as any);

    render(<CustomersPage />, { wrapper: createWrapper() });

    expect(screen.getByText('No customers found')).toBeInTheDocument();
  });
});
