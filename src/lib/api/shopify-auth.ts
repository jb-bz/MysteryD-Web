const SESSION_KEY = 'mysteryd_shopify_session';

export interface ShopifySession {
  shop: string;
  accessToken: string;
  scope: string;
}

export async function getSession(): Promise<ShopifySession | null> {
  if (typeof window === 'undefined') {
    return getServerSession();
  }
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as ShopifySession;
  } catch {
    return null;
  }
}

export async function getServerSession(): Promise<ShopifySession | null> {
  try {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_KEY);
    if (!sessionCookie) return null;
    return JSON.parse(sessionCookie.value) as ShopifySession;
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

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session !== null && Boolean(session.accessToken);
}