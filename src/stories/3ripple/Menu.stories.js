import { fn } from "@storybook/test";
import { Tree } from "./Menu";

const ActionsData = {
  onclick: fn(),
};

export default {
  component: Tree,
  title: "Menu/Tree",
  tags: ["autodocs"],
  parameters: {},
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    logoSrc: "src/assets/Logo3.png",
    logoAlt: "Logo Alt Text",
    links: [
      { href: "#home", text: "Home" },
      { href: "#about", text: "About" },
      { href: "#services", text: "Services" },
      { href: "#contact", text: "Contact" },
    ],
  },
};

export const WithManyLinks = {
  args: {
    logoSrc: "src/assets/logo3.png",
    logoAlt: "Logo Alt Text",
    links: [
      { href: "#home", text: "Home" },
      { href: "#about", text: "About" },
      { href: "#services", text: "Services" },
      { href: "#contact", text: "Contact" },
      { href: "#blog", text: "Blog" },
      { href: "#careers", text: "Careers" },
      { href: "#support", text: "Support" },
      { href: "#faq", text: "FAQ" },
    ],
  },
};

export const NoLinks = {
  args: {
    logoSrc: "src/assets/logo3.png",
    logoAlt: "Logo Alt Text",
    links: [],
  },
};

export const CustomStyles = {
  args: {
    logoSrc: "src/assets/logo3.png",
    logoAlt: "Logo Alt Text",
    links: [
      { href: "#home", text: "Home" },
      { href: "#about", text: "About" },
      { href: "#services", text: "Services" },
      { href: "#contact", text: "Contact" },
    ],
    styles: {
      navbar: {
        backgroundColor: "#333333",
        color: "#fff",
      },
      "nav-links": {
        display: "flex",
        justifyContent: "space-around",
      },
      "burger-menu": {
        backgroundColor: "#fff",
      },
      "nav-links-mobile": {
        backgroundColor: "#444",
      },
    },
  },
};
