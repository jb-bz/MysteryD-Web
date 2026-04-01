'use client';

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

interface ToastProps {
  id?: string;
  variant?: ToastVariant;
  title: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, string> = {
  info: 'border-info bg-info/5',
  success: 'border-success bg-success/5',
  warning: 'border-warning bg-warning/5',
  error: 'border-destructive bg-destructive/5',
};

const variantIconStyles: Record<ToastVariant, string> = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
};

const variantTitleStyles: Record<ToastVariant, string> = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
};

function ToastIcon({ variant }: { variant: ToastVariant }) {
  const iconClass = cn('h-5 w-5', variantIconStyles[variant]);
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

function InternalToast({ variant = 'info', title, description, onClose }: Omit<ToastProps, 'id'>) {
  return (
    <ToastPrimitive.Root
      className={cn(
        'group pointer-events-auto relative flex w-full items-start gap-3 rounded-lg border p-4 shadow-lg',
        'radix-toast:animate-in radix-toast:fade-in-0 radix-toast:slide-in-from-bottom-full',
        'radix-toast-swipe:animate-out radix-toast-swipe:fade-out-0 radix-toast-swipe:slide-out-from-bottom-full',
        'radix-toast-swipe:exit',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-full',
        'bg-surface text-foreground',
        variantStyles[variant]
      )}
      duration={5000}
    >
      <ToastIcon variant={variant} />
      <div className="flex-1 space-y-1">
        <ToastPrimitive.Title className={cn('text-sm font-semibold', variantTitleStyles[variant])}>
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="text-sm text-muted-foreground">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      <ToastPrimitive.Close
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent group-hover:opacity-100"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}

interface ToastItem extends Omit<ToastProps, 'onClose'> {
  id: string;
}

interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, 'id'>) => string;
  removeToast: (id: string) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, dismiss }}>
      <ToastPrimitive.Provider swipeDirection="down">
        {children}
        {toasts.map((toast) => (
          <InternalToast key={toast.id} variant={toast.variant} title={toast.title} description={toast.description} />
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[420px]" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export const Toast = React.forwardRef<
  HTMLLIElement,
  Omit<ToastPrimitive.ToastProps, 'children'> & { variant?: ToastVariant; title: string; description?: string }
>(({ className, variant = 'info', title, description, ...props }, ref) => {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(
        'group pointer-events-auto relative flex w-full items-start gap-3 rounded-lg border p-4 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-full',
        'data-[swipe=end]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-full',
        'data-[swipe=move]:transition-none data-[swipe=move]:translate-x-0 data-[swipe=move]:translate-y-0',
        'data-[state=open]:slide-in-from-bottom-full',
        'bg-surface text-foreground',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <ToastPrimitive.Title className={cn('text-sm font-semibold', variantTitleStyles[variant])}>
        {title}
      </ToastPrimitive.Title>
      {description && (
        <ToastPrimitive.Description className='text-sm text-muted-foreground'>
          {description}
        </ToastPrimitive.Description>
      )}
    </ToastPrimitive.Root>
  );
});
Toast.displayName = 'Toast';

export {
  ToastPrimitive,
};
