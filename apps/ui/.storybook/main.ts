import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname, resolve } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-a11y')
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  async viteFinal(config) {
    // Add path aliases
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': resolve(dirname(__filename), '../src'),
        '@components': resolve(dirname(__filename), '../src/components'),
        '@lib': resolve(dirname(__filename), '../src/lib'),
        '@ui': resolve(dirname(__filename), '../src/components/ui'),
        '@styles': resolve(dirname(__filename), '../src/styles'),
      },
    };
    
    // Add Tailwind CSS v4 plugin
    const tailwindcss = await import('@tailwindcss/vite').then(m => m.default);
    config.plugins = [...(config.plugins || []), tailwindcss()];
    
    return config;
  },
};
export default config;