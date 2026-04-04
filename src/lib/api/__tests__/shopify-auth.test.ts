import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as shopifyAuth from '../shopify-auth';

const SESSION_KEY = 'mysteryd_shopify_session';

describe('shopify-auth', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('getSession', () => {
    it('should return null when no session exists', async () => {
      const stored = sessionStorage.getItem(SESSION_KEY);
      sessionStorage.removeItem(SESSION_KEY);

      const result = await shopifyAuth.getSession();
      expect(result).toBeNull();

      if (stored) sessionStorage.setItem(SESSION_KEY, stored);
    });

    it('should return session object when session exists', async () => {
      const mockSession = {
        shop: 'test.myshopify.com',
        accessToken: 'test_token_123',
        scope: 'read_orders,read_customers,read_analytics',
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(mockSession));

      const result = await shopifyAuth.getSession();
      expect(result).toEqual(mockSession);

      sessionStorage.removeItem(SESSION_KEY);
    });
  });

  describe('storeSession', () => {
    it('should store session in sessionStorage', () => {
      const mockSession = {
        shop: 'test.myshopify.com',
        accessToken: 'test_token_123',
        scope: 'read_orders,read_customers,read_analytics',
      };

      sessionStorage.removeItem(SESSION_KEY);
      shopifyAuth.storeSession(mockSession);

      const stored = sessionStorage.getItem(SESSION_KEY);
      expect(stored).toBe(JSON.stringify(mockSession));

      sessionStorage.removeItem(SESSION_KEY);
    });
  });

  describe('clearSession', () => {
    it('should remove session from sessionStorage', () => {
      const mockSession = {
        shop: 'test.myshopify.com',
        accessToken: 'test_token_123',
        scope: 'read_orders,read_customers,read_analytics',
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(mockSession));

      shopifyAuth.clearSession();

      const stored = sessionStorage.getItem(SESSION_KEY);
      expect(stored).toBeNull();
    });
  });

  describe('isAuthenticated', () => {
    it('should return false when no session exists', async () => {
      sessionStorage.removeItem(SESSION_KEY);

      const result = await shopifyAuth.isAuthenticated();
      expect(result).toBe(false);
    });

    it('should return true when session exists', async () => {
      const mockSession = {
        shop: 'test.myshopify.com',
        accessToken: 'test_token_123',
        scope: 'read_orders,read_customers,read_analytics',
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(mockSession));

      const result = await shopifyAuth.isAuthenticated();
      expect(result).toBe(true);

      sessionStorage.removeItem(SESSION_KEY);
    });
  });
});