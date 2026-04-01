import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useOrders, useOrder } from '../orders';
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
  Wrapper.displayName = 'OrdersQueryWrapper';
  return Wrapper;
};

describe('orders', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_orders',
    });
  });

  describe('useOrders', () => {
    it('should be defined as a function', () => {
      expect(typeof useOrders).toBe('function');
    });

    it('should throw error when not authenticated', async () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

      const { result } = renderHook(() => useOrders(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBe(true));
    });
  });

  describe('useOrder', () => {
    it('should be defined as a function', () => {
      expect(typeof useOrder).toBe('function');
    });
  });
});