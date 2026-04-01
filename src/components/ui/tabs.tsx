"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  orientation?: "horizontal" | "vertical";
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs");
  }
  return context;
}

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
}

function Tabs({
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  orientation = "horizontal",
  children,
  className,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;
  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [controlledValue, onValueChange]
  );

  return (
    <TabsContext.Provider
      value={{ value, onValueChange: handleValueChange, orientation }}
    >
      <div
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-row gap-4" : "flex-col",
          className
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

function TabsList({ children, className, ariaLabel, ...props }: TabsListProps) {
  const { orientation } = useTabsContext();

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      aria-label={ariaLabel}
      className={cn(
        "flex",
        orientation === "horizontal"
          ? "flex-row gap-1 border-b border-border"
          : "flex-col gap-1 border-r border-border pr-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps extends React.ComponentProps<"button"> {
  value: string;
  disabled?: boolean;
}

function TabsTrigger({
  children,
  value,
  disabled,
  className,
  ...props
}: TabsTriggerProps) {
  const { value: selectedValue, onValueChange, orientation } = useTabsContext();
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      data-state={isSelected ? "active" : "inactive"}
      onClick={() => onValueChange(value)}
      className={cn(
        "relative px-4 py-2.5 text-sm font-medium transition-colors outline-none",
        "hover:text-primary",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        isSelected
          ? "text-primary"
          : "text-muted-foreground",
        orientation === "horizontal" && "border-b-2 border-transparent -mb-px",
        orientation === "vertical" && "border-r-2 border-transparent text-left",
        isSelected && orientation === "horizontal" && "border-b-primary",
        isSelected && orientation === "vertical" && "border-r-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends React.ComponentProps<"div"> {
  value: string;
  forceMount?: boolean;
}

function TabsContent({
  children,
  value,
  forceMount,
  className,
  ...props
}: TabsContentProps) {
  const { value: selectedValue } = useTabsContext();
  const isSelected = selectedValue === value;

  if (!isSelected && !forceMount) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      data-state={isSelected ? "active" : "inactive"}
      hidden={!isSelected}
      className={cn(
        "mt-4 outline-none",
        isSelected ? "animate-fade-in" : "hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
