import { useQuery } from '@tanstack/react-query';
import { shopifyFetch } from './client';
import type { ShopifyCustomersResponse } from './types';

async function fetchCustomers(): Promise<ShopifyCustomersResponse> {
  return shopifyFetch<ShopifyCustomersResponse>('customers.json');
}

async function fetchCustomer(id: number): Promise<ShopifyCustomersResponse> {
  return shopifyFetch<ShopifyCustomersResponse>(`customers/${id}.json`);
}

export function useCustomers() {
  return useQuery({
    queryKey: ['shopify', 'customers'],
    queryFn: fetchCustomers,
    select: (data) => data.customers,
  });
}

export function useCustomer(id: number) {
  return useQuery({
    queryKey: ['shopify', 'customers', id],
    queryFn: () => fetchCustomer(id),
    select: (data) => data.customers[0],
    enabled: Boolean(id),
  });
}