import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeToggle, ThemeToggleGroup } from "../../components/ui/theme-toggle";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const meta: Meta<typeof ThemeToggle> = {
  title: "UI Kit/Theme Toggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Theme toggle components that allow users to switch between light, dark, and system themes. These components integrate with the theme context to provide seamless theme switching with smooth transitions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["button", "dropdown"],
      description: "The variant of the theme toggle",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size of the theme toggle",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "button",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    variant: "button",
    size: "sm",
  },
};

export const Dropdown: Story = {
  args: {
    variant: "dropdown",
    size: "default",
  },
};

export const ThemeToggleGroupStory: Story = {
  render: () => <ThemeToggleGroup />,
  name: "Theme Toggle Group",
  parameters: {
    docs: {
      description: {
        story: "A group of buttons that allows users to select between light, dark, and system themes.",
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Theme Demo</CardTitle>
          <CardDescription>
            This card demonstrates how the theme system works across components.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Toggle Theme:</span>
            <ThemeToggle variant="button" />
          </div>

          <div className="space-y-2">
            <Button variant="default" className="w-full">Primary Button</Button>
            <Button variant="secondary" className="w-full">Secondary Button</Button>
            <Button variant="outline" className="w-full">Outline Button</Button>
            <Button variant="ghost" className="w-full">Ghost Button</Button>
          </div>

          <div className="pt-4 border-t border-border">
            <ThemeToggleGroup />
          </div>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            This card has an elevated shadow that responds to theme changes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Notice how the text colors, backgrounds, and borders all adapt seamlessly
            when you switch themes using the controls above.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  name: "Theme System Demo",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "A comprehensive demonstration of the theme system working across multiple components. Switch themes using the toggle above to see the smooth transitions.",
      },
    },
  },
};