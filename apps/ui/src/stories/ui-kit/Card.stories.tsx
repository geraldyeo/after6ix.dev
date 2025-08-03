import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, type CardProps } from "@components/ui/card"
import { Button } from "@components/ui/button"

const meta: Meta<CardProps> = {
  title: "UI Kit/Card",
  component: Card as any,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "shadow", "bordered", "elevated", "ghost"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "default", "lg"],
    },
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description that provides context.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content area of the card. You can put any content here including text, images, or other components.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="mr-2">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </>
    ),
  },
}

export const Shadow: Story = {
  args: {
    variant: "shadow",
    children: (
      <>
        <CardHeader>
          <CardTitle>Shadow Card</CardTitle>
          <CardDescription>This card has a shadow effect with hover state.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Hover over this card to see the shadow transition effect.</p>
        </CardContent>
      </>
    ),
  },
}

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <>
        <CardHeader>
          <CardTitle>Bordered Card</CardTitle>
          <CardDescription>This card has a prominent border.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>The border is thicker than the default variant.</p>
        </CardContent>
      </>
    ),
  },
}

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>This card appears elevated with a larger shadow.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Perfect for important content that needs to stand out.</p>
        </CardContent>
      </>
    ),
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    className: "border border-dashed border-neutral-300",
    children: (
      <>
        <CardHeader>
          <CardTitle>Ghost Card</CardTitle>
          <CardDescription>Transparent background with optional border.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This variant is useful for placeholder or subtle content areas.</p>
        </CardContent>
      </>
    ),
  },
}

export const WithoutPadding: Story = {
  args: {
    padding: "none",
    children: (
      <>
        <img 
          src="https://placehold.co/400x200" 
          alt="Placeholder" 
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <CardHeader className="p-0">
            <CardTitle>Custom Padding</CardTitle>
            <CardDescription>This card has no default padding.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>Useful when you need full control over spacing, like with images.</p>
          </CardContent>
        </div>
      </>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: (
      <>
        <CardHeader>
          <CardTitle className="text-lg">Compact Card</CardTitle>
          <CardDescription>With reduced padding for tighter layouts.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Perfect for lists or grids where space is limited.</p>
        </CardContent>
      </>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: (
      <>
        <CardHeader>
          <CardTitle className="text-2xl">Spacious Card</CardTitle>
          <CardDescription>Extra padding for a more luxurious feel.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Great for hero sections or featured content that needs breathing room.</p>
        </CardContent>
      </>
    ),
  },
}

export const Interactive: Story = {
  args: {
    variant: "shadow",
    className: "cursor-pointer hover:border-primary-500 transition-colors",
    onClick: () => alert("Card clicked!"),
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Click this card to trigger an action.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Cards can be made interactive with onClick handlers and hover effects.</p>
        </CardContent>
      </>
    ),
  },
}

export const ComplexContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Project Update</CardTitle>
              <CardDescription>Latest changes to the design system</CardDescription>
            </div>
            <span className="text-sm text-neutral-500">2 hours ago</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-semibold">JD</span>
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-neutral-600">Lead Designer</p>
            </div>
          </div>
          <p>We've completed the initial implementation of the Card component with multiple variants and flexible padding options. The component now supports composition patterns for maximum flexibility.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-md">Design System</span>
            <span className="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded-md">React</span>
            <span className="px-2 py-1 text-xs bg-accent-100 text-accent-700 rounded-md">TypeScript</span>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="ghost" size="sm">Comment</Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Share</Button>
            <Button size="sm">View Details</Button>
          </div>
        </CardFooter>
      </>
    ),
  },
}