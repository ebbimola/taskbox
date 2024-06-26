/** @type { import('@storybook/react-vite').StorybookConfig } */
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
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
