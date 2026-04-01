'use client';

import * as React from 'react';
import Link from 'next/link';
import { DataTable, type Column } from '@/components/ui/data-table';
import { Input } from '@/components/ui/input';
import { useCustomers } from '@/lib/api';
import type { ShopifyCustomer } from '@/lib/api/types';

function formatCurrency(value: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(value));
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

type CustomerRow = {
  id: string;
  name: string;
  email: string;
  ordersCount: number;
  totalSpent: string;
  lastOrder: string;
  _sortName?: string;
  _sortEmail?: string;
} & Record<string, unknown>;

export default function CustomersPage() {
  const { data: customers, isLoading } = useCustomers();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortField, setSortField] = React.useState<string>('name');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const tableData = React.useMemo<CustomerRow[]>(() => {
    if (!customers) return [];

    let filtered = customers;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.first_name.toLowerCase().includes(query) ||
          c.last_name.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query)
      );
    }

    return filtered.map((customer: ShopifyCustomer) => ({
      id: String(customer.id),
      name: `${customer.first_name} ${customer.last_name}`,
      email: customer.email,
      ordersCount: customer.orders_count,
      totalSpent: formatCurrency(customer.total_spent),
      lastOrder: customer.updated_at,
      _sortName: `${customer.first_name} ${customer.last_name}`.toLowerCase(),
      _sortEmail: customer.email.toLowerCase(),
    }));
  }, [customers, searchQuery]);

  const sortedData = React.useMemo(() => {
    return [...tableData].sort((a, b) => {
      let aVal: string | number;
      let bVal: string | number;

      if (sortField === 'name') {
        aVal = a._sortName ?? '';
        bVal = b._sortName ?? '';
      } else if (sortField === 'email') {
        aVal = a._sortEmail ?? '';
        bVal = b._sortEmail ?? '';
      } else if (sortField === 'lastOrder') {
        aVal = a.lastOrder;
        bVal = b.lastOrder;
      } else {
        aVal = a[sortField as keyof CustomerRow] as string | number;
        bVal = b[sortField as keyof CustomerRow] as string | number;
      }

      if (typeof aVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal as string)
          : (bVal as string).localeCompare(aVal);
      }

      return sortDirection === 'asc' ? aVal - (bVal as number) : (bVal as number) - aVal;
    });
  }, [tableData, sortField, sortDirection]);

  const columns: Column<CustomerRow>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (row: CustomerRow) => (
        <Link
          href={`/app/customers/${row.id}`}
          className="font-medium text-primary hover:underline"
        >
          {row.name}
        </Link>
      ),
    },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'ordersCount', header: 'Orders', sortable: true },
    { key: 'totalSpent', header: 'Total Spent', sortable: true },
    {
      key: 'lastOrder',
      header: 'Last Order',
      sortable: true,
      render: (row: CustomerRow) => formatDate(row.lastOrder),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground mt-1">
          View and manage your customers
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <DataTable<CustomerRow>
        columns={columns}
        data={sortedData}
        keyField="id"
        loading={isLoading}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={(field, direction) => {
          setSortField(field);
          setSortDirection(direction);
        }}
        empty={{
          title: 'No customers found',
          description: searchQuery
            ? 'Try adjusting your search'
            : 'Customers will appear here once you have them',
        }}
      />
    </div>
  );
}
