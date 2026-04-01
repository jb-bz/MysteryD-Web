import type { Meta, StoryObj } from "@storybook/react"
import { CheckCircle, XCircle, Plus, Package, AlertCircle } from "lucide-react"
import { ActivityItem } from "./activity-item"

const meta = {
  title: "UI/ActivityItem",
  component: ActivityItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ActivityItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: "Campaign 'Q1 Store Audit' was completed",
    timestamp: "2 hours ago",
  },
}

export const WithIcon: Story = {
  args: {
    description: "New merchant 'Acme Stores' was added",
    timestamp: "30 minutes ago",
    icon: <Plus className="h-4 w-4" />,
  },
}

export const CompletedStatus: Story = {
  args: {
    description: "Campaign 'March Mystery Shop' marked as completed",
    timestamp: "Mar 15, 2026 at 3:42 PM",
    icon: <CheckCircle className="h-4 w-4" />,
  },
}

export const ErrorStatus: Story = {
  args: {
    description: "Failed to sync with Shopify — retry in progress",
    timestamp: "5 minutes ago",
    icon: <XCircle className="h-4 w-4" />,
  },
}

export const WithLink: Story = {
  args: {
    description: "View campaign report for 'Q1 Audit'",
    timestamp: "Mar 15, 2026",
    href: "/campaigns/q1-audit",
    icon: <Package className="h-4 w-4" />,
  },
}

export const WarningStatus: Story = {
  args: {
    description: "Campaign 'Spring Evaluation' approaching deadline",
    timestamp: "1 hour ago",
    icon: <AlertCircle className="h-4 w-4" />,
  },
}

export const ActivityFeed: Story = {
  args: {
    description: "Campaign 'Q1 Store Audit' was completed",
    timestamp: "2 hours ago",
  },
}
ActivityFeed.decorators = [
  (Story) => (
    <div className="w-full max-w-md border rounded-xl p-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
        Recent Activity
      </h3>
      <div className="divide-y">
        <Story />
        <ActivityItem
          description="New store 'Bay Area Shops' was added"
          timestamp="2 hours ago"
          icon={<Plus className="h-4 w-4" />}
        />
        <ActivityItem
          description="Campaign 'February Blitz' was created"
          timestamp="Yesterday"
          icon={<Package className="h-4 w-4" />}
        />
        <ActivityItem
          description="Report downloaded for 'Q4 Audit'"
          timestamp="2 days ago"
        />
      </div>
    </div>
  ),
]
