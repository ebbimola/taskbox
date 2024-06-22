import { ThreeRippleMobileFooter } from "./Mobile-Footer";

export default {
  title: "Footer/Mobile-Footer",
  component: ThreeRippleMobileFooter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    className: { control: "text" },
    links: { control: "object" },
    socialIcons: { control: "array" },
  },
};

export const Default = {
  args: {
    className: "",
    logoSrc: "public/SingleLogo.svg",
    links: [
      ["Title", "Project 1", "Project 2", "Project 3"],
      ["Title", "Project 4", "Project 5", "Project 6"],
      ["Title", "Project 7", "Project 8", "Project 9"],
    ],
    socialIcons: ["vector0.svg", "vector1.svg", "fill-logos-twitter-fill0.svg"],
  },
};
