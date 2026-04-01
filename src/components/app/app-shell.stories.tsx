import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./app-shell";
import { LayoutDashboard, Package, Users, BarChart3, Settings } from "lucide-react";

const meta = {
  title: "App/Shell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (Story) => (
      <div className="dark:hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    appName: "MysteryD",
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
    activeNavId: "dashboard",
    showDarkModeToggle: true,
    children: (
      <div className="p-8">
        <h1 className="font-heading text-3xl font-bold text-[var(--app-text-primary)] mb-2">
          Dashboard
        </h1>
        <p style={{ color: "var(--app-text-secondary)" }}>
          Welcome to the MysteryD app. This is the main content area.
        </p>
      </div>
    ),
  },
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      <div className="hidden dark:block">
        <Story />
      </div>
    ),
  ],
  args: {
    appName: "MysteryD",
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
    activeNavId: "dashboard",
    showDarkModeToggle: true,
    children: (
      <div className="p-8">
        <h1 className="font-heading text-3xl font-bold text-[var(--app-text-primary)] mb-2">
          Dashboard
        </h1>
        <p style={{ color: "var(--app-text-secondary)" }}>
          Welcome to the MysteryD app. This is the main content area.
        </p>
      </div>
    ),
  },
};

export const CollapsedSidebar: Story = {
  decorators: [
    (Story) => (
      <div className="dark:hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    appName: "MysteryD",
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
    activeNavId: "dashboard",
    showDarkModeToggle: false,
    children: (
      <div className="p-8">
        <h1 className="font-heading text-3xl font-bold text-[var(--app-text-primary)] mb-2">
          Dashboard
        </h1>
        <p style={{ color: "var(--app-text-secondary)" }}>
          Sidebar collapsed to icon rail mode.
        </p>
      </div>
    ),
  },
};

export const WithBadges: Story = {
  decorators: [
    (Story) => (
      <div className="dark:hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    appName: "MysteryD",
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
    activeNavId: "dashboard",
    showDarkModeToggle: true,
    navItems: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/app" },
      { id: "orders", label: "Orders", icon: Package, href: "/app/orders", badge: 12 },
      { id: "customers", label: "Customers", icon: Users, href: "/app/customers", badge: 48 },
      { id: "analytics", label: "Analytics", icon: BarChart3, href: "/app/analytics" },
      { id: "settings", label: "Settings", icon: Settings, href: "/app/settings" },
    ],
    children: (
      <div className="p-8">
        <h1 className="font-heading text-3xl font-bold text-[var(--app-text-primary)] mb-2">
          Dashboard
        </h1>
        <p style={{ color: "var(--app-text-secondary)" }}>
          Nav items with notification badges.
        </p>
      </div>
    ),
  },
};