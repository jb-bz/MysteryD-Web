"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string | null;
  onValueChange: (value: string | null) => void;
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

interface AccordionProps {
  defaultValue?: string | null;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  collapsible?: boolean;
  type?: "single" | "multiple";
  children: React.ReactNode;
  className?: string;
}

function Accordion({
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = true,
  type = "single",
  children,
  className,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string | null>(defaultValue ?? null);

  if (type === "multiple" && !onValueChange) {
    throw new Error("Accordion with type='multiple' requires onValueChange prop");
  }

  const value = controlledValue ?? uncontrolledValue;
  const handleValueChange = React.useCallback(
    (newValue: string | null) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [controlledValue, onValueChange]
  );

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange, collapsible }}>
      <div className={cn("flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
}

function AccordionItem({ children, className, disabled, ...props }: AccordionItemProps) {
  return (
    <div
      data-state={disabled ? "disabled" : "open"}
      data-disabled={disabled}
      className={cn("border-b border-border", disabled && "opacity-50 pointer-events-none", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface AccordionTriggerProps extends React.ComponentProps<"button"> {
  value: string;
}

function AccordionTrigger({ children, className, value, ...props }: AccordionTriggerProps) {
  const { value: selectedValue, onValueChange, collapsible } = useAccordionContext();
  const isOpen = selectedValue === value;

  const handleClick = () => {
    if (!collapsible && isOpen) return;
    onValueChange(isOpen ? null : value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex items-center justify-between w-full px-4 py-4 text-left",
        "text-base font-medium text-foreground",
        "transition-colors hover:text-primary hover:bg-muted/50",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  );
}

interface AccordionContentProps extends React.ComponentProps<"div"> {
  value: string;
}

function AccordionContent({ children, className, value, ...props }: AccordionContentProps) {
  const { value: selectedValue } = useAccordionContext();
  const isOpen = selectedValue === value;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      hidden={!isOpen}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "animate-slide-down" : ""
      )}
    >
      <div className={cn("px-4 pb-4 text-sm text-muted-foreground", className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
