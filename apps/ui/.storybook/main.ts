import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, resolve } from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  async viteFinal(config) {
    // Add path aliases
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": resolve(dirname(__filename), "../src"),
        "@components": resolve(dirname(__filename), "../src/components"),
        "@lib": resolve(dirname(__filename), "../src/lib"),
        "@ui": resolve(dirname(__filename), "../src/components/ui"),
        "@styles": resolve(dirname(__filename), "../src/styles"),
      },
    };
    // Add Tailwind CSS v4 plugin
    const tailwindcss = await import("@tailwindcss/vite").then(m => m.default);

    config.plugins = [...(config.plugins || []), tailwindcss()];

    return config;
  },
};

export default config;