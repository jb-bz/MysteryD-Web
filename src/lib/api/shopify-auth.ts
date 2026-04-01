const SESSION_KEY = 'mysteryd_shopify_session';

export interface ShopifySession {
  shop: string;
  accessToken: string;
  scope: string;
}

export function getSession(): ShopifySession | null {
  if (typeof window === 'undefined') return null;
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as ShopifySession;
  } catch {
    return null;
  }
}

export function storeSession(session: ShopifySession): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  const session = getSession();
  return session !== null && Boolean(session.accessToken);
}