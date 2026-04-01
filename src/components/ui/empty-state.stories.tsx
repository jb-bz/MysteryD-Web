import type { Meta, StoryObj } from "@storybook/react"
import { Package, ShoppingCart, Users, FileText } from "lucide-react"
import { EmptyState } from "./empty-state"

const meta = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "No campaigns yet",
    description: "Create your first campaign to start collecting insights.",
  },
}

export const WithIcon: Story = {
  args: {
    title: "No stores",
    description: "Add the stores you want to mystery shop.",
    icon: <ShoppingCart className="h-8 w-8" />,
  },
}

export const WithAction: Story = {
  args: {
    title: "No campaigns",
    description: "Create your first campaign to start collecting insights.",
    action: {
      label: "Create Campaign",
      onClick: () => alert("Create clicked"),
    },
  },
}

export const FullExample: Story = {
  args: {
    title: "No analytics yet",
    description: "Complete your first mystery shop to see performance data.",
    icon: <FileText className="h-8 w-8" />,
    action: {
      label: "Start a Campaign",
      onClick: () => alert("Start clicked"),
    },
  },
}

export const NoItems: Story = {
  args: {
    title: "No merchants",
    description: "Add merchants to your account to manage them here.",
    icon: <Users className="h-8 w-8" />,
    action: {
      label: "Add Merchant",
      onClick: () => alert("Add clicked"),
    },
  },
}

export const EmptyInbox: Story = {
  args: {
    title: "No notifications",
    description: "You're all caught up. New updates will appear here.",
    icon: <Package className="h-8 w-8" />,
  },
}
