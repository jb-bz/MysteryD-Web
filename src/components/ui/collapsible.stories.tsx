import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Button } from "./button";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="font-medium">
          Click to expand
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 text-sm text-muted-foreground">
            This is hidden content that expands when you click the trigger.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger className="font-medium">
        Uncontrolled Collapsible
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2 text-sm text-muted-foreground">
          This collapsible manages its own state internally.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const FAQ: Story = {
  render: () => {
    const faqs = [
      {
        q: "What is your return policy?",
        a: "We offer 30-day returns on all unused items in original packaging.",
      },
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 3-5 business days. Express shipping is 1-2 business days.",
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship to over 50 countries worldwide.",
      },
    ];

    return (
      <div className="w-full max-w-md space-y-2">
        {faqs.map((faq, i) => (
          <Collapsible key={i}>
            <CollapsibleTrigger className="w-full rounded-lg border p-4 text-left font-medium hover:bg-muted/50 transition-colors">
              {faq.q}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="border-x border-b p-4 text-sm text-muted-foreground">
                {faq.a}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

export const WithButtonTrigger: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex items-center justify-between">
          <span className="font-medium">Advanced Settings</span>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {open ? "Hide" : "Show"} Options
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="opt1" />
              <label htmlFor="opt1">Enable feature A</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="opt2" />
              <label htmlFor="opt2">Enable feature B</label>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
