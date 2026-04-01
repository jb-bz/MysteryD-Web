import { describe, it, expect } from 'vitest';
import { createQueryClient } from '../query-client';

describe('query-client', () => {
  describe('createQueryClient', () => {
    it('should create a QueryClient with default options', () => {
      const client = createQueryClient();

      expect(client).toBeDefined();
      expect(client.getQueryCache()).toBeDefined();
      expect(client.getMutationCache()).toBeDefined();
    });

    it('should have retry configuration set to 3', () => {
      const client = createQueryClient();
      const defaultOptions = client.getDefaultOptions();

      expect(defaultOptions.queries?.retry).toBe(3);
    });

    it('should have staleTime set to 60 seconds', () => {
      const client = createQueryClient();
      const defaultOptions = client.getDefaultOptions();

      expect(defaultOptions.queries?.staleTime).toBe(1000 * 60);
    });

    it('should have gcTime set to 5 minutes', () => {
      const client = createQueryClient();
      const defaultOptions = client.getDefaultOptions();

      expect(defaultOptions.queries?.gcTime).toBe(1000 * 60 * 5);
    });
  });
});