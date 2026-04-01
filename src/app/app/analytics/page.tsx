'use client';

import * as React from 'react';
import { BarChart3, TrendingUp, Package, DollarSign } from 'lucide-react';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useOrders } from '@/lib/api';

function formatCurrency(value: string | number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(typeof value === 'string' ? parseFloat(value) : value);
}

function getDateRange(days: number): { start: Date; end: Date } {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - days);
  return { start, end };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export default function AnalyticsPage() {
  const { data: orders, isLoading: ordersLoading } = useOrders();

  const [period, setPeriod] = React.useState<'30' | '60' | '90'>('30');
  const days = parseInt(period, 10);

  const { start, end } = getDateRange(days);

  const filteredOrders = React.useMemo(() => {
    if (!orders) return [];
    return orders.filter((order) => {
      const orderDate = new Date(order.created_at);
      return orderDate >= start && orderDate <= end;
    });
  }, [orders, start, end]);

  const totalRevenue = filteredOrders.reduce(
    (sum, order) => sum + parseFloat(order.total_price),
    0
  );
  const totalOrders = filteredOrders.length;
  const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const revenueByDate = React.useMemo(() => {
    const map = new Map<string, number>();
    filteredOrders.forEach((order) => {
      const dateKey = formatDate(order.created_at);
      map.set(dateKey, (map.get(dateKey) ?? 0) + parseFloat(order.total_price));
    });
    return Array.from(map.entries()).map(([date, revenue]) => ({ date, revenue }));
  }, [filteredOrders]);

  const ordersByDate = React.useMemo(() => {
    const map = new Map<string, number>();
    filteredOrders.forEach((order) => {
      const dateKey = formatDate(order.created_at);
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });
    return Array.from(map.entries()).map(([date, count]) => ({ date, count }));
  }, [filteredOrders]);

  const topProducts = React.useMemo(() => {
    const productMap = new Map<string, { title: string; quantity: number; revenue: number }>();
    filteredOrders.forEach((order) => {
      order.line_items.forEach((item) => {
        const existing = productMap.get(item.title) ?? { title: item.title, quantity: 0, revenue: 0 };
        existing.quantity += item.quantity;
        existing.revenue += parseFloat(item.price) * item.quantity;
        productMap.set(item.title, existing);
      });
    });
    return Array.from(productMap.values())
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);
  }, [filteredOrders]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track your store performance
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPeriod('30')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              period === '30'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            30d
          </button>
          <button
            onClick={() => setPeriod('60')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              period === '60'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            60d
          </button>
          <button
            onClick={() => setPeriod('90')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              period === '90'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            90d
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label={`Revenue (${period}d)`}
          value={formatCurrency(totalRevenue)}
          loading={ordersLoading}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <StatCard
          label={`Orders (${period}d)`}
          value={totalOrders}
          loading={ordersLoading}
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard
          label="Average Order Value"
          value={formatCurrency(aov)}
          loading={ordersLoading}
          icon={<TrendingUp className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Revenue Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            {ordersLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            ) : revenueByDate.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-8">
                No revenue data for this period
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueByDate.map(({ date, revenue }) => (
                    <TableRow key={date}>
                      <TableCell className="font-medium">{date}</TableCell>
                      <TableCell className="text-right">{formatCurrency(revenue)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Package className="h-5 w-5" />
              Orders Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            {ordersLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            ) : ordersByDate.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-8">
                No order data for this period
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Orders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordersByDate.map(({ date, count }) => (
                    <TableRow key={date}>
                      <TableCell className="font-medium">{date}</TableCell>
                      <TableCell className="text-right">{count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Top Products by Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          {ordersLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : topProducts.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center py-8">
              No product data for this period
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product, index) => (
                  <TableRow key={product.title}>
                    <TableCell className="font-medium">
                      <span className="text-muted-foreground mr-2">#{index + 1}</span>
                      {product.title}
                    </TableCell>
                    <TableCell className="text-right">{product.quantity}</TableCell>
                    <TableCell className="text-right">{formatCurrency(product.revenue)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
