import { useQuery } from '@tanstack/react-query';
import { shopifyFetch } from './client';
import type { ShopifyAnalyticsResponse } from './types';

async function fetchAnalytics(): Promise<ShopifyAnalyticsResponse> {
  return shopifyFetch<ShopifyAnalyticsResponse>('analytics.json');
}

export function useAnalytics() {
  return useQuery({
    queryKey: ['shopify', 'analytics'],
    queryFn: fetchAnalytics,
    select: (data) => data.data,
  });
}