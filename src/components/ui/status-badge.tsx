import * as React from 'react';
import { cn } from '@/lib/utils';

export type StatusVariant = 'active' | 'inactive' | 'pending' | 'error';

interface StatusBadgeProps {
  variant: StatusVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  active: 'bg-success/10 text-success border-success/20',
  inactive: 'bg-muted text-muted-foreground border-border',
  pending: 'bg-warning/10 text-warning border-warning/20',
  error: 'bg-destructive/10 text-destructive border-destructive/20',
};

const variantDotStyles: Record<StatusVariant, string> = {
  active: 'bg-success',
  inactive: 'bg-muted-foreground',
  pending: 'bg-warning',
  error: 'bg-destructive',
};

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', variantDotStyles[variant])} />
      {children}
    </span>
  );
}
