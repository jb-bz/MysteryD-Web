import type { Meta, StoryObj } from "@storybook/react"
import { NewsletterForm } from "./newsletter-form"

const meta = {
  title: "UI/NewsletterForm",
  component: NewsletterForm,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof NewsletterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Newsletter: Story = {
  args: {
    variant: "newsletter",
    source: "storybook",
  },
}

export const NewsletterWithCustomText: Story = {
  args: {
    variant: "newsletter",
    source: "storybook",
    title: "Get exclusive updates",
    description: "Join 2,000+ founders getting our weekly digest on building in public.",
  },
}

export const Waitlist: Story = {
  args: {
    variant: "waitlist",
    source: "storybook",
  },
}

export const WaitlistWithCustomText: Story = {
  args: {
    variant: "waitlist",
    source: "storybook",
    title: "Be the first to try MysteryD",
    description: "We're building the next generation of Shopify apps. Join early.",
  },
}

export const CompactNewsletter: Story = {
  args: {
    variant: "newsletter",
    source: "storybook",
    compact: true,
    className: "max-w-sm",
  },
}

export const CompactWaitlist: Story = {
  args: {
    variant: "waitlist",
    source: "storybook",
    compact: true,
    className: "max-w-sm",
  },
}

export const SubmittingNewsletter: Story = {
  args: {
    variant: "newsletter",
    source: "storybook",
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    },
  },
}

export const SubmittingWaitlist: Story = {
  args: {
    variant: "waitlist",
    source: "storybook",
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    },
  },
}

export const ErrorNewsletter: Story = {
  args: {
    variant: "newsletter",
    source: "storybook",
    onSubmit: async () => {
      throw new Error("Server error")
    },
  },
}

export const ErrorWaitlist: Story = {
  args: {
    variant: "waitlist",
    source: "storybook",
    onSubmit: async () => {
      throw new Error("Server error")
    },
  },
}
