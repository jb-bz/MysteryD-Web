'use client';

import * as React from 'react';
import Link from 'next/link';
import { DataTable, type Column } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/ui/status-badge';
import { Input } from '@/components/ui/input';
import { useOrders } from '@/lib/api';

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

type OrderRow = {
  id: string;
  name: string;
  date: string;
  customer: string;
  items: number;
  total: string;
  status: string | null;
  statusVariant: 'active' | 'pending' | 'error' | 'inactive';
  _sortDate?: string;
} & Record<string, unknown>;

export default function OrdersPage() {
  const { data: orders, isLoading } = useOrders();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [sortField, setSortField] = React.useState<string>('date');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');

  const tableData = React.useMemo<OrderRow[]>(() => {
    if (!orders) return [];

    let filtered = orders;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.name.toLowerCase().includes(query) ||
          order.customer?.first_name.toLowerCase().includes(query) ||
          order.customer?.last_name.toLowerCase().includes(query) ||
          order.customer?.email.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((order) => order.fulfillment_status === statusFilter);
    }

    return filtered.map((order) => ({
      id: String(order.id),
      name: order.name,
      date: formatDate(order.created_at),
      customer: order.customer
        ? `${order.customer.first_name} ${order.customer.last_name}`
        : '—',
      items: order.line_items.length,
      total: formatCurrency(order.total_price),
      status: getStatusLabel(order.fulfillment_status),
      statusVariant: getStatusVariant(order.fulfillment_status),
      _sortDate: order.created_at,
    }));
  }, [orders, searchQuery, statusFilter]);

  const sortedData = React.useMemo(() => {
    return [...tableData].sort((a, b) => {
      let aVal: string | number;
      let bVal: string | number;

      if (sortField === 'date') {
        aVal = a._sortDate ?? '';
        bVal = b._sortDate ?? '';
      } else {
        aVal = a[sortField as keyof OrderRow] as string | number;
        bVal = b[sortField as keyof OrderRow] as string | number;
      }

      if (typeof aVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal as string)
          : (bVal as string).localeCompare(aVal);
      }

      return sortDirection === 'asc' ? aVal - (bVal as number) : (bVal as number) - aVal;
    });
  }, [tableData, sortField, sortDirection]);

  const columns: Column<OrderRow>[] = [
    {
      key: 'name',
      header: 'Order',
      sortable: true,
      render: (row: OrderRow) => (
        <Link
          href={`/app/orders/${row.id}`}
          className="font-medium text-primary hover:underline"
        >
          {row.name}
        </Link>
      ),
    },
    { key: 'date', header: 'Date', sortable: true },
    { key: 'customer', header: 'Customer', sortable: true },
    { key: 'items', header: 'Items', sortable: true },
    { key: 'total', header: 'Total', sortable: true },
    {
      key: 'status',
      header: 'Status',
      render: (row: OrderRow) => (
        <StatusBadge variant={row.statusVariant}>{row.status}</StatusBadge>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-1">
          Manage and view your store orders
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search orders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="fulfilled">Fulfilled</option>
            <option value="partial">Partial</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      <DataTable<OrderRow>
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
          title: 'No orders found',
          description: searchQuery || statusFilter !== 'all'
            ? 'Try adjusting your filters'
            : 'Orders will appear here once you have them',
        }}
      />
    </div>
  );
}
