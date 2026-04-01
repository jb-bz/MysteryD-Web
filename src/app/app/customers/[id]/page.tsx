'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, DollarSign, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useCustomer } from '@/lib/api';

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
  });
}

export default function CustomerDetailPage() {
  const params = useParams();
  const customerId = params.id ? parseInt(params.id as string, 10) : null;
  const { data: customer, isLoading, error } = useCustomer(customerId ?? 0);

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

  if (error || !customer) {
    return (
      <div className="space-y-6">
        <Link href="/app/customers">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customers
          </Button>
        </Link>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Customer not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const primaryAddress = customer.addresses?.[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/customers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            {customer.first_name} {customer.last_name}
          </h1>
          <p className="text-muted-foreground text-sm">
            Customer since {formatDate(customer.created_at)}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <User className="h-5 w-5" />
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`mailto:${customer.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {customer.email}
                </a>
              </div>
              {customer.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{customer.phone}</span>
                </div>
              )}
              {primaryAddress && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div className="text-sm">
                    <p>{primaryAddress.address1}</p>
                    <p>
                      {primaryAddress.city}, {primaryAddress.province} {primaryAddress.zip}
                    </p>
                    <p>{primaryAddress.country}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Lifetime Value
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-3xl font-bold font-heading">
                  {formatCurrency(customer.total_spent)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Total spent across {customer.orders_count} orders
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">First Order</span>
                <span className="text-sm">{formatDate(customer.created_at)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Order</span>
                <span className="text-sm">{formatDate(customer.updated_at)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Orders</span>
                <span className="text-sm font-medium">{customer.orders_count}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Order History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm text-center py-8">
              Order history will be displayed here once orders are available via API.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
