import { QueryClient } from '@tanstack/react-query';

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 5,
      },
      mutations: {
        retry: 1,
      },
    },
  });
}