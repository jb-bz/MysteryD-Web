'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Package, User, Calendar, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/status-badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useOrder } from '@/lib/api';
import type { ShopifyLineItem } from '@/lib/api/types';

function formatCurrency(value: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(value));
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function getStatusVariant(
  status: string | null
): 'active' | 'pending' | 'error' | 'inactive' {
  switch (status) {
    case 'fulfilled':
      return 'active';
    case 'partial':
      return 'pending';
    case 'refunded':
      return 'error';
    default:
      return 'pending';
  }
}

function getStatusLabel(status: string | null): string {
  if (!status) return 'Unfulfilled';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params.id ? parseInt(params.id as string, 10) : null;
  const { data: order, isLoading, error } = useOrder(orderId ?? 0);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-8 w-48" />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="space-y-6">
        <Link href="/app/orders">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Button>
        </Link>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Order not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const customer = order.customer;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/orders">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            {order.name}
          </h1>
          <p className="text-muted-foreground text-sm">
            {formatDate(order.created_at)}
          </p>
        </div>
        <StatusBadge variant={getStatusVariant(order.fulfillment_status)}>
          {getStatusLabel(order.fulfillment_status)}
        </StatusBadge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.line_items.map((item: ShopifyLineItem) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="text-right">{item.quantity}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency((parseFloat(item.price) * item.quantity).toString())}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    {formatCurrency(order.total_price)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(order.total_price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>—</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-3">
                <span>Total</span>
                <span>{formatCurrency(order.total_price)}</span>
              </div>
            </CardContent>
          </Card>

          {customer && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">
                    {customer.first_name} {customer.last_name}
                  </p>
                  <p className="text-sm text-muted-foreground">{customer.email}</p>
                </div>
                {customer.phone && (
                  <p className="text-sm">{customer.phone}</p>
                )}
                <Link href={`/app/customers/${customer.id}`}>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    View Customer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">Order Placed</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(order.created_at)}
                    </p>
                  </div>
                </div>
                {order.fulfillment_status && (
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-success" />
                    <div>
                      <p className="text-sm font-medium">
                        {getStatusLabel(order.fulfillment_status)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(order.updated_at)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
