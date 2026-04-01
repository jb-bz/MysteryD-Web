import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">What is Paperclip?</AccordionTrigger>
          <AccordionContent value="item-1">
            Paperclip is a modern design system built for speed and accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Is it accessible?</AccordionTrigger>
          <AccordionContent value="item-2">
            Yes, all components meet WCAG 2.1 AA standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger value="item-3">Can I customize it?</AccordionTrigger>
          <AccordionContent value="item-3">
            Absolutely, components are designed to be composable and customizable.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">First panel</AccordionTrigger>
          <AccordionContent value="item-1">
            This panel can be open at the same time as others.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Second panel</AccordionTrigger>
          <AccordionContent value="item-2">
            Multiple panels can be expanded simultaneously.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
