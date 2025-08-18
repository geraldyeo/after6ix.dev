import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { Button, type ButtonProps } from "../../components/ui/button";

const meta: Meta<ButtonProps> = {
  title: "UI Kit/Button",
  component: Button as any,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link", "accent"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Extra Large",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span>With Icon</span>
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading</span>
      </>
    ),
  },
};

// Interactive examples
export const WithActions: Story = {
  args: {
    children: "Click me",
    onClick: action("onClick"),
    onMouseEnter: action("onMouseEnter"),
    onMouseLeave: action("onMouseLeave"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#example">Link styled as button</a>,
  },
  parameters: {
    docs: {
      description: {
        story: "Using the `asChild` prop with Radix UI Slot to render as a different element",
      },
    },
  },
};