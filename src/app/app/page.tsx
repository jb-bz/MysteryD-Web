'use client';

import * as React from 'react';
import { Package, DollarSign, Users, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/ui/stat-card';
import { ActivityItem } from '@/components/ui/activity-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrders, useCustomers } from '@/lib/api';
import type { ShopifyOrder } from '@/lib/api/types';

function formatCurrency(value: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(value));
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function getOrderDescription(order: ShopifyOrder): string {
  const customerName = order.customer
    ? `${order.customer.first_name} ${order.customer.last_name}`
    : 'Unknown Customer';
  return `Order ${order.name} — ${customerName}`;
}

export default function DashboardPage() {
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const { data: customers, isLoading: customersLoading } = useCustomers();

  const totalOrders = orders?.length ?? 0;
  const totalRevenue = orders?.reduce((sum, o) => sum + parseFloat(o.total_price), 0) ?? 0;
  const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const activeCustomers = customers?.length ?? 0;

  const recentOrders = [...(orders ?? [])]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 10);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your store performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Orders (30d)"
          value={totalOrders}
          loading={ordersLoading}
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard
          label="Revenue (30d)"
          value={formatCurrency(totalRevenue.toString())}
          loading={ordersLoading}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <StatCard
          label="AOV"
          value={formatCurrency(aov.toString())}
          loading={ordersLoading}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard
          label="Active Customers"
          value={activeCustomers}
          loading={customersLoading}
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {ordersLoading ? (
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : recentOrders.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-8">
                No recent orders
              </p>
            ) : (
              <div className="divide-y divide-border">
                {recentOrders.map((order) => (
                  <ActivityItem
                    key={order.id}
                    description={getOrderDescription(order)}
                    timestamp={formatDate(order.created_at)}
                    href={`/app/orders/${order.id}`}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending Orders</span>
              <span className="font-medium">
                {orders?.filter((o) => o.fulfillment_status === null).length ?? 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Fulfilled Orders</span>
              <span className="font-medium">
                {orders?.filter((o) => o.fulfillment_status === 'fulfilled').length ?? 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Refunded Orders</span>
              <span className="font-medium">
                {orders?.filter((o) => o.fulfillment_status === 'refunded').length ?? 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Customers</span>
              <span className="font-medium">{activeCustomers}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
