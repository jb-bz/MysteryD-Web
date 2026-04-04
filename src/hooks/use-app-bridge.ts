'use client';

import { createApp } from '@shopify/app-bridge';
import type { ClientApplication } from '@shopify/app-bridge/client/types';
import { useMemo } from 'react';

export interface UseAppBridgeOptions {
  apiKey: string;
  host?: string;
}

export function useAppBridge({ apiKey, host }: UseAppBridgeOptions): ClientApplication | null {
  const app = useMemo(() => {
    if (typeof window === 'undefined') return null;
    if (!apiKey || !host) return null;

    return createApp({ apiKey, host });
  }, [apiKey, host]);

  return app;
}