import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useAnalytics } from '../analytics';
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
  Wrapper.displayName = 'AnalyticsQueryWrapper';
  return Wrapper;
};

describe('analytics', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(shopifyAuth, 'getSession').mockResolvedValue({
      shop: 'test.myshopify.com',
      accessToken: 'test_token',
      scope: 'read_analytics',
    });
  });

  describe('useAnalytics', () => {
    it('should be defined as a function', () => {
      expect(typeof useAnalytics).toBe('function');
    });

    it('should throw error when not authenticated', async () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

      const { result } = renderHook(() => useAnalytics(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isError).toBe(true));
    });
  });
});