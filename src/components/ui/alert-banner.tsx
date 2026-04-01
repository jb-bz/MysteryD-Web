import * as React from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AlertBannerVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertBannerProps {
  variant?: AlertBannerVariant;
  title: string;
  description?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<AlertBannerVariant, string> = {
  info: 'bg-info/5 border-info/20 text-info',
  success: 'bg-success/5 border-success/20 text-success',
  warning: 'bg-warning/5 border-warning/20 text-warning',
  error: 'bg-destructive/5 border-destructive/20 text-destructive',
};

const variantIconStyles: Record<AlertBannerVariant, string> = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
};

function AlertBannerIcon({ variant }: { variant: AlertBannerVariant }) {
  const iconClass = cn('h-5 w-5 flex-shrink-0', variantIconStyles[variant]);
  switch (variant) {
    case 'success':
      return <CheckCircle className={iconClass} />;
    case 'error':
      return <AlertCircle className={iconClass} />;
    case 'warning':
      return <AlertTriangle className={iconClass} />;
    case 'info':
    default:
      return <Info className={iconClass} />;
  }
}

export function AlertBanner({
  variant = 'info',
  title,
  description,
  dismissible = false,
  onDismiss,
  className,
  children,
}: AlertBannerProps) {
  return (
    <div
      role="alert"
      className={cn(
        'relative flex items-start gap-3 rounded-lg border p-4',
        variantStyles[variant],
        className
      )}
    >
      <AlertBannerIcon variant={variant} />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-semibold">{title}</p>
        {description && <p className="text-sm opacity-80">{description}</p>}
        {children}
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            'absolute right-4 top-4 rounded-md p-1',
            'opacity-70 transition-opacity hover:opacity-100',
            'focus:outline-none focus:ring-2 focus:ring-current'
          )}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
