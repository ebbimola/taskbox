// src/components/ThreeRippleFooter.stories.js

import { ThreeRippleFooter } from "./MainFooter";

export default {
  title: "Footer/ThreeRippleFooter",
  component: ThreeRippleFooter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    className: { control: "text" },
    links: { control: "object" },
    socialIcons: { control: "array" },
    policies: { control: "object" },
  },
};

export const Default = {
  args: {
    className: "",
    logosrc: "public/SingleLogo.svg",
    links: [
      ["Title", "Project 1", "Project 2", "Project 3", "Project 4"],
      ["Title", "Project 5", "Project 6", "Project 7", "Project 8"],
      ["Title", "Project 9", "Project 10", "Project 11", "Project 12"],
    ],
    socialIcons: ["vector0.svg", "vector1.svg", "fill-logos-twitter-fill0.svg"],
    policies: [
      { text: "About 3ripple", className: "about-3-ripple" },
      { text: "Privacy Policy", className: "privacy-policy" },
      { text: "Cookie Policy", className: "cookie-policy" },
      { text: "Terms and Conditions", className: "terms-and-conditions" },
    ],
  },
};

export const CustomClassName = {
  args: {
    className: "custom-class",
    links: [
      [
        "Custom Title",
        "Custom Project 1",
        "Custom Project 2",
        "Custom Project 3",
        "Custom Project 4",
      ],
      [
        "Custom Title",
        "Custom Project 5",
        "Custom Project 6",
        "Custom Project 7",
        "Custom Project 8",
      ],
      [
        "Custom Title",
        "Custom Project 9",
        "Custom Project 10",
        "Custom Project 11",
        "Custom Project 12",
      ],
    ],
    socialIcons: [
      "custom-vector0.svg",
      "custom-vector1.svg",
      "custom-fill-logos-twitter-fill0.svg",
    ],
    policies: [
      { text: "Custom About 3ripple", className: "about-3-ripple" },
      { text: "Custom Privacy Policy", className: "privacy-policy" },
      { text: "Custom Cookie Policy", className: "cookie-policy" },
      {
        text: "Custom Terms and Conditions",
        className: "terms-and-conditions",
      },
    ],
  },
};
