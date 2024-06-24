/** @type { import('@storybook/react-vite').StorybookConfig } */
// /** @type {import('@storybook/nextjs').StorybookConfig} */

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx)",
    "../src/3ripple/**/*.stories.@(js|jsx)",
  ],

  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook"
  ],

  // framework: path.resolve(require.resolve('@storybook/nextjs/preset'), '..'),
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
