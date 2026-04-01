'use client';

import * as React from 'react';
import { AppShell } from '@/components/app';
import { QueryProvider } from '@/lib/api';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/app' },
  { id: 'orders', label: 'Orders', icon: Package, href: '/app/orders' },
  { id: 'customers', label: 'Customers', icon: Users, href: '/app/customers' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/app/analytics' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/app/settings' },
];

function getActiveNavId(pathname: string): string {
  if (pathname === '/app' || pathname === '/app/') return 'dashboard';
  if (pathname.startsWith('/app/orders')) return 'orders';
  if (pathname.startsWith('/app/customers')) return 'customers';
  if (pathname.startsWith('/app/analytics')) return 'analytics';
  if (pathname.startsWith('/app/settings')) return 'settings';
  return 'dashboard';
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeNavId = getActiveNavId(pathname);

  return (
    <QueryProvider>
      <AppShell
        appName="MysteryD"
        storeName="MysteryD Store"
        storeDomain="mysteryd.myshopify.com"
        userAvatarFallback="JD"
        navItems={NAV_ITEMS}
        activeNavId={activeNavId}
        showDarkModeToggle={true}
      >
        <div className="p-6">
          {children}
        </div>
      </AppShell>
    </QueryProvider>
  );
}
