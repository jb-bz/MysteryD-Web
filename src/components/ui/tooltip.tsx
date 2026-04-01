"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipContextValue {
  open: string | null;
  setOpen: (id: string | null) => void;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

function useTooltipContext() {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip components must be used within a TooltipProvider");
  }
  return context;
}

interface TooltipProviderProps {
  delayDuration?: number;
  children: React.ReactNode;
}

function TooltipProvider({ delayDuration = 300, children }: TooltipProviderProps) {
  const [open, setOpen] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const setOpenWithDelay = React.useCallback(
    (id: string | null) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (id === null) {
        timeoutRef.current = setTimeout(() => setOpen(null), 100);
      } else {
        timeoutRef.current = setTimeout(() => setOpen(id), delayDuration);
      }
    },
    [delayDuration]
  );

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TooltipContext.Provider value={{ open, setOpen: setOpenWithDelay }}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipProps {
  children: React.ReactNode;
}

function Tooltip({ children }: TooltipProps) {
  return <>{children}</>;
}

interface TooltipTriggerProps extends React.ComponentProps<"button"> {
  tooltipContent: React.ReactNode;
  id: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

function TooltipTrigger({
  children,
  id,
  className,
  onKeyDown,
  ...props
}: TooltipTriggerProps) {
  const { setOpen } = useTooltipContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(id);
    }
    onKeyDown?.(e);
  };

  return (
    <button
      type="button"
      data-tooltip-id={id}
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
      onFocus={() => setOpen(id)}
      onBlur={() => setOpen(null)}
      onKeyDown={handleKeyDown}
      className={cn("relative inline-flex", className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TooltipContentProps extends React.ComponentProps<"div"> {
  id: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

function TooltipContent({
  children,
  id,
  side = "top",
  align = "center",
  className,
  ...props
}: TooltipContentProps) {
  const { open } = useTooltipContext();

  if (open !== id) return null;

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const alignClasses = {
    start: "",
    center: "-translate-x-1/2",
    end: "translate-x-1/2",
  };

  return (
    <div
      role="tooltip"
      data-state="visible"
      className={cn(
        "absolute z-50 px-3 py-1.5 text-xs text-primary-foreground bg-primary rounded-lg shadow-lg",
        "animate-fade-in",
        sideClasses[side],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn("absolute w-2 h-2 bg-primary rotate-45", {
          "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2": side === "top",
          "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2": side === "bottom",
          "right-0 top-1/2 -translate-y-1/2 translate-x-1/2": side === "left",
          "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2": side === "right",
        })}
        aria-hidden="true"
      />
    </div>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
