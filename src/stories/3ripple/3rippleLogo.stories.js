import { SingleLogo } from "./3rippleLogo";

export default {
  title: "Logo/3rippleLogo",
  component: SingleLogo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    logoSrc: "src/assets/Logo3.png",
    logoAlt: "Logo Alt Text",
    className: "blue",
  },
};
