'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DialogContextValue {
  titleId: string;
  descriptionId: string;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog');
  }
  return context;
}

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const titleId = React.useId();
  const descriptionId = React.useId();
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = onOpenChange ?? setUncontrolledOpen;

  return (
    <DialogContext.Provider value={{ titleId, descriptionId }}>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
}

function DialogTrigger({ children, asChild, ...props }: DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild={asChild} {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
}

interface DialogContentProps extends React.ComponentProps<'div'> {
  onClose?: () => void;
  showCloseButton?: boolean;
}

function DialogContent({
  children,
  className,
  onClose,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  const { titleId, descriptionId } = useDialogContext();

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in"
        style={{ position: 'fixed', inset: 0 }}
      />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 w-full max-w-lg mx-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'bg-card text-card-foreground rounded-xl shadow-2xl animate-scale-in',
          'border border-border',
          'focus:outline-none',
          className
        )}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onEscapeKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClose?.();
          }
        }}
        {...props}
      >
        {showCloseButton && (
          <DialogPrimitive.Close
            asChild
            onClick={onClose}
            className={cn(
              'absolute top-4 right-4 rounded-lg p-2',
              'text-muted-foreground hover:text-foreground hover:bg-muted',
              'transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>
        )}
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 p-6 pb-0', className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  const { titleId } = useDialogContext();
  return (
    <DialogPrimitive.Title
      id={titleId}
      className={cn('text-lg font-heading font-semibold', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  const { descriptionId } = useDialogContext();
  return (
    <DialogPrimitive.Description
      id={descriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function DialogBody({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('px-6 py-4', className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 p-6 pt-0',
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
};
