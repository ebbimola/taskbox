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
    socialIcons: ["instagram.svg", "facebook.svg", "twitter.svg"],
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
    logosrc: "public/SingleLogo.svg",
    links: [
      [
        "Title",
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
      ],
      [
        "Custom Title",
        "Custom Project 5",
        "Custom Project 6",
        "Custom Project 7",
        "Custom Project 8",
      ],
      [
        "Title",
        "Project 9",
        "Project 10",
        "Project 11",
        "Project 12",
      ],
    ],
    socialIcons: [
      "instagram.svg",
      "facebook.svg",
      "twitter.svg",
    ],
    policies: [
      { text: "About 3ripple", className: "about-3-ripple" },
      { text: "Privacy Policy", className: "privacy-policy" },
      { text: "Cookie Policy", className: "cookie-policy" },
      {
        text: "Terms and Conditions",
        className: "terms-and-conditions",
      },
    ],
  },
};
