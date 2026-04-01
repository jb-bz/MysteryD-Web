'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { Button } from './button';
import { Skeleton } from './skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  loading?: boolean;
  empty?: {
    title: string;
    description?: string;
    action?: React.ReactNode;
  };
  error?: {
    title: string;
    description?: string;
    onRetry?: () => void;
  };
  selectable?: boolean;
  selectedKeys?: Set<string>;
  onSelectionChange?: (keys: Set<string>) => void;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
  };
  sortField?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (field: string, direction: 'asc' | 'desc') => void;
  className?: string;
}

function SortIcon({ field, sortField, sortDirection }: { field: string; sortField?: string; sortDirection?: 'asc' | 'desc' }) {
  if (sortField !== field) {
    return <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />;
  }
  return sortDirection === 'asc' ? (
    <ChevronUp className="h-4 w-4 text-accent" />
  ) : (
    <ChevronDown className="h-4 w-4 text-accent" />
  );
}

function LoadingSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
          {Array.from({ length: columns }).map((_, j) => (
            <TableCell key={j}>
              <Skeleton className="h-6 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

function EmptyStateView({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <TableRow>
      <TableCell colSpan={100} className="h-48 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg font-medium text-foreground">{title}</p>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          {action && <div className="mt-4">{action}</div>}
        </div>
      </TableCell>
    </TableRow>
  );
}

function ErrorStateView({ title, description, onRetry }: { title: string; description?: string; onRetry?: () => void }) {
  return (
    <TableRow>
      <TableCell colSpan={100} className="h-48 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg font-medium text-destructive">{title}</p>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          {onRetry && (
            <Button variant="outline" size="sm" onClick={onRetry} className="mt-4">
              Retry
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyField,
  loading = false,
  empty,
  error,
  selectable = false,
  selectedKeys = new Set(),
  onSelectionChange,
  pagination,
  sortField,
  sortDirection,
  onSort,
  className,
}: DataTableProps<T>) {
  const allSelected = data.length > 0 && data.every((row) => selectedKeys.has(String(row[keyField])));
  const someSelected = data.some((row) => selectedKeys.has(String(row[keyField]))) && !allSelected;

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelectionChange) return;
    if (e.target.checked) {
      onSelectionChange(new Set(data.map((row) => String(row[keyField]))));
    } else {
      onSelectionChange(new Set());
    }
  };

  const handleSelectRow = (key: string) => {
    if (!onSelectionChange) return;
    const newKeys = new Set(selectedKeys);
    if (newKeys.has(key)) {
      newKeys.delete(key);
    } else {
      newKeys.add(key);
    }
    onSelectionChange(newKeys);
  };

  const handleSelectRowChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelectionChange) return;
    const newKeys = new Set(selectedKeys);
    if (e.target.checked) {
      newKeys.add(key);
    } else {
      newKeys.delete(key);
    }
    onSelectionChange(newKeys);
  };

  const handleSort = (field: string) => {
    if (!onSort) return;
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(field, newDirection);
  };

  const totalPages = pagination ? Math.ceil(pagination.total / pagination.pageSize) : 1;
  const startItem = pagination ? (pagination.page - 1) * pagination.pageSize + 1 : 1;
  const endItem = pagination ? Math.min(pagination.page * pagination.pageSize, pagination.total) : data.length;

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="overflow-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {selectable && (
                <TableHead className="w-12">
                  <Checkbox
                    checked={allSelected ? true : someSelected ? 'indeterminate' : false}
                    onChange={handleSelectAllChange}
                    aria-label="Select all"
                  />
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  style={{ width: col.width }}
                  className={cn(col.sortable && 'cursor-pointer select-none hover:bg-muted/50')}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                >
                  <div className="flex items-center gap-2">
                    <span>{col.header}</span>
                    {col.sortable && (
                      <SortIcon field={col.key} sortField={sortField} sortDirection={sortDirection} />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading && <LoadingSkeleton rows={5} columns={columns.length + (selectable ? 1 : 0)} />}
            {!loading && error && (
              <ErrorStateView
                title={error.title}
                description={error.description}
                onRetry={error.onRetry}
              />
            )}
            {!loading && !error && data.length === 0 && empty && (
              <EmptyStateView
                title={empty.title}
                description={empty.description}
                action={empty.action}
              />
            )}
            {!loading && !error && data.length > 0 && data.map((row) => {
              const rowKey = String(row[keyField]);
              const isSelected = selectedKeys.has(rowKey);
              return (
                <TableRow
                  key={rowKey}
                  data-state={isSelected ? 'selected' : undefined}
                  className={cn(selectable && 'cursor-pointer')}
                >
                  {selectable && (
                    <TableCell onClick={() => handleSelectRow(rowKey)}>
                      <Checkbox
                        checked={isSelected}
                        onChange={(e) => handleSelectRowChange(rowKey, e)}
                        aria-label={`Select row ${rowKey}`}
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => (
                    <TableCell key={col.key} onClick={selectable ? () => handleSelectRow(rowKey) : undefined}>
                      {col.render ? col.render(row) : String(row[col.key] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {pagination && data.length > 0 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {pagination.total === 0 ? 'No items' : `${startItem}–${endItem} of ${pagination.total}`}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
            >
              Previous
            </Button>
            <span className="px-2">
              Page {pagination.page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(pagination.page + 1)}
              disabled={pagination.page >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {selectable && selectedKeys.size > 0 && (
        <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-2 text-sm">
          <span className="font-medium">{selectedKeys.size} selected</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSelectionChange?.(new Set())}
          >
            Clear selection
          </Button>
        </div>
      )}
    </div>
  );
}
