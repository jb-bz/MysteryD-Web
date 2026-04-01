import type { Meta, StoryObj } from "@storybook/react"
import { ShoppingCart, Users, Star } from "lucide-react"
import { StatCard } from "./stat-card"

const meta = {
  title: "UI/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Total Campaigns",
    value: 128,
  },
}

export const WithTrendUp: Story = {
  args: {
    label: "Active Campaigns",
    value: 47,
    trend: {
      direction: "up",
      value: "+12%",
      label: "vs last month",
    },
  },
}

export const WithTrendDown: Story = {
  args: {
    label: "Response Rate",
    value: "23%",
    trend: {
      direction: "down",
      value: "-5%",
      label: "vs last month",
    },
  },
}

export const WithTrendNeutral: Story = {
  args: {
    label: "Avg Score",
    value: 94.2,
    trend: {
      direction: "neutral",
      value: "0%",
      label: "vs last month",
    },
  },
}

export const WithDescription: Story = {
  args: {
    label: "Total Revenue",
    value: "$48,290",
    description: "Across all active campaigns",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Merchants",
    value: "1,284",
    icon: <Users className="h-5 w-5" />,
    trend: {
      direction: "up",
      value: "+8%",
      label: "this month",
    },
  },
}

export const Loading: Story = {
  args: {
    label: "Pending Reviews",
    value: 0,
    loading: true,
  },
}

export const Error: Story = {
  args: {
    label: "API Calls",
    value: 0,
    error: true,
  },
}

export const NumericValueFormatted: Story = {
  args: {
    label: "Total Users",
    value: 1234567,
    trend: {
      direction: "up",
      value: "+23.4%",
      label: "vs last year",
    },
  },
}

export const DashboardGrid: Story = {
  args: {
    label: "Active Campaigns",
    value: 47,
    icon: <ShoppingCart className="h-5 w-5" />,
    trend: {
      direction: "up",
      value: "+12%",
      label: "vs last month",
    },
  },
}
DashboardGrid.decorators = [
  (Story) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  ),
]

export const CompactGrid: Story = {
  args: {
    label: "Avg Rating",
    value: 4.8,
    icon: <Star className="h-5 w-5" />,
    trend: {
      direction: "up",
      value: "+0.3",
      label: "this quarter",
    },
  },
}
