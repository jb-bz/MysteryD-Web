import { useQuery } from '@tanstack/react-query';
import { shopifyFetch } from './client';
import type { ShopifyOrdersResponse } from './types';

async function fetchOrders(): Promise<ShopifyOrdersResponse> {
  return shopifyFetch<ShopifyOrdersResponse>('orders.json');
}

async function fetchOrder(id: number): Promise<ShopifyOrdersResponse> {
  return shopifyFetch<ShopifyOrdersResponse>(`orders/${id}.json`);
}

export function useOrders() {
  return useQuery({
    queryKey: ['shopify', 'orders'],
    queryFn: fetchOrders,
    select: (data) => data.orders,
  });
}

export function useOrder(id: number) {
  return useQuery({
    queryKey: ['shopify', 'orders', id],
    queryFn: () => fetchOrder(id),
    select: (data) => data.orders[0],
    enabled: Boolean(id),
  });
}