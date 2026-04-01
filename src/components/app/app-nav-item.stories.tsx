import type { Meta, StoryObj } from "@storybook/react";
import { AppNavItem } from "./app-nav-item";
import { LayoutDashboard, Package, Users, Settings } from "lucide-react";

const meta = {
  title: "App/NavItem",
  component: AppNavItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppNavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/app",
  },
};

export const Active: Story = {
  args: {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/app",
    isActive: true,
  },
};

export const WithBadge: Story = {
  args: {
    icon: Package,
    label: "Orders",
    href: "/app/orders",
    badge: 5,
  },
};

export const ActiveWithBadge: Story = {
  args: {
    icon: Package,
    label: "Orders",
    href: "/app/orders",
    isActive: true,
    badge: 12,
  },
};

export const Collapsed: Story = {
  args: {
    icon: Users,
    label: "Customers",
    isCollapsed: true,
    badge: 3,
  },
};

export const Disabled: Story = {
  args: {
    icon: Settings,
    label: "Settings",
    disabled: true,
  },
};