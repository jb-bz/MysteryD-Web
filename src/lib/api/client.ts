import { getSession } from './shopify-auth';

const API_VERSION = '2024-01';

export class ShopifyApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ShopifyApiError';
  }
}

interface ShopifyErrorResponse {
  message?: string;
  errors?: Array<{ message: string; code: string }>;
}

async function shopifyFetch<T>(path: string): Promise<T> {
  const session = await getSession();
  if (!session) {
    throw new ShopifyApiError('Not authenticated', 401, 'AUTH_REQUIRED');
  }

  const url = `https://${session.shop}/admin/api/${API_VERSION}/${path}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.accessToken}`,
      'X-Shopify-Access-Token': session.accessToken,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText })) as ShopifyErrorResponse;
    throw new ShopifyApiError(
      errorData.message || response.statusText,
      response.status,
      errorData.errors?.[0]?.code
    );
  }

  return response.json() as Promise<T>;
}

export { shopifyFetch };