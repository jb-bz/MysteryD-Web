import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useCustomers, useCustomer } from '../customers';
import * as shopifyAuth from '../shopify-auth';

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

describe('customers', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_customers',
    });
  });

  describe('useCustomers', () => {
    it('should be defined as a function', () => {
      expect(typeof useCustomers).toBe('function');
    });

    it('should throw error when not authenticated', async () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

      const { result } = renderHook(() => useCustomers(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBe(true));
    });
  });

  describe('useCustomer', () => {
    it('should be defined as a function', () => {
      expect(typeof useCustomer).toBe('function');
    });
  });
});