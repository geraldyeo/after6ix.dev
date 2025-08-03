import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/contexts/theme-context'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      disable: true, // Disable since we're using our theme system
    },
  },
  decorators: [
    // First apply the theme class decorator
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // Then wrap with ThemeProvider for context
    (Story, context) => {
      // Get the current theme from addon-themes
      const theme = context.globals.theme || 'light'
      
      return React.createElement(
        ThemeProvider,
        { 
          defaultTheme: theme === 'dark' ? 'dark' : 'light',
          enableSystem: false,
          storageKey: 'storybook-theme',
          children: React.createElement(Story)
        }
      )
    },
  ],
};

export default preview;