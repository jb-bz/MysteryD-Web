import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import { HelpCircle } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger id="tooltip-1" tooltipContent="This is helpful information">
          <Button variant="outline" size="icon">
            ?
          </Button>
        </TooltipTrigger>
        <TooltipContent id="tooltip-1">
          This is helpful information
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithHelpIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger id="tooltip-help" tooltipContent="Need help? Contact support">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent id="tooltip-help">
          Need help? Contact support
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4 flex-wrap">
        <Tooltip>
          <TooltipTrigger id="tooltip-top" tooltipContent="Tooltip on top" side="top">
            <Button variant="outline" size="sm">Top</Button>
          </TooltipTrigger>
          <TooltipContent id="tooltip-top" side="top">
            Tooltip on top
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger id="tooltip-bottom" tooltipContent="Tooltip on bottom" side="bottom">
            <Button variant="outline" size="sm">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent id="tooltip-bottom" side="bottom">
            Tooltip on bottom
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger id="tooltip-left" tooltipContent="Tooltip on left" side="left">
            <Button variant="outline" size="sm">Left</Button>
          </TooltipTrigger>
          <TooltipContent id="tooltip-left" side="left">
            Tooltip on left
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger id="tooltip-right" tooltipContent="Tooltip on right" side="right">
            <Button variant="outline" size="sm">Right</Button>
          </TooltipTrigger>
          <TooltipContent id="tooltip-right" side="right">
            Tooltip on right
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger id="save" tooltipContent="Save your changes">
            <Button variant="outline">Save</Button>
          </TooltipTrigger>
          <TooltipContent id="save">
            Save your changes
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger id="delete" tooltipContent="Permanently delete this item">
            <Button variant="destructive">Delete</Button>
          </TooltipTrigger>
          <TooltipContent id="delete">
            Permanently delete this item
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger id="share" tooltipContent="Share with collaborators">
            <Button variant="outline">Share</Button>
          </TooltipTrigger>
          <TooltipContent id="share">
            Share with collaborators
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};
