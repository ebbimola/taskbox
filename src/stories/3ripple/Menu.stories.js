import { fn } from "@storybook/test";
import { Tree } from "./Menu";

const ActionsData = {
  onclick: fn(),
};

export default {
  component: Tree,
  title: "3ripple/Tree",
  tags: ["autodocs"],
  parameters: {},
  args: {
    ...ActionsData,
  },
};

// export const MenuStory = () => <Tree />;

// export const Menu3ripple = {
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
//     },
//   },
// };

export const Default = {
  args: {
    logoSrc: "public/logo3.png",
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
    logoSrc: "public/logo3.png",
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
    logoSrc: "public/logo3.png",
    logoAlt: "Logo Alt Text",
    links: [],
  },
};

export const CustomStyles = {
  args: {
    logoSrc: "public/logo3.png",
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
