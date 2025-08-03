import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeDemo } from '../../components/ui/theme-demo'

const meta: Meta<typeof ThemeDemo> = {
  title: 'UI Kit/Theme Demo',
  component: ThemeDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive demonstration of the After6ix theme system showcasing how all components adapt to different themes with smooth transitions.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The complete theme demo showing all components, colors, and theme controls working together. Use the theme toggle in the Storybook toolbar or within the demo to see theme transitions.',
      },
    },
  },
}