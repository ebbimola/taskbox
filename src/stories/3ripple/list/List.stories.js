import { fn } from "@storybook/test";
import { List } from "./List";

const ActionsData = {
  onclick: fn(),
};

export default {
  component: List,
  title: "List/List",
  tags: ["autodocs"],
  parameters: {},
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    steps: [
      {
        name: "REQUIREMENT",
        color: "red",
        icon: "/path/to/requirement-icon.png",
        links: [{ url: "#", text: "More Info" }],
      },
      {
        name: "SYSTEM DESIGN",
        color: "blue",
        icon: "/path/to/system-design-icon.png",
        links: [{ url: "#", text: "Details" }],
      },
      {
        name: "UI/UX",
        color: "orange",
        icon: "/path/to/ui-ux-icon.png",
        links: [{ url: "#", text: "Resources" }],
      },
      {
        name: "IMPLEMENTATION",
        color: "black",
        icon: "/path/to/implementation-icon.png",
        links: [{ url: "#", text: "Guide" }],
      },
      {
        name: "MAINTENANCE",
        color: "blue",
        icon: "/path/to/maintenance-icon.png",
        links: [{ url: "#", text: "Support" }],
      },
    ],
    size: "medium",
  },
};

export const OneWithoutIcons = {
  args: {
    steps: [
      {
        name: "REQUIREMENT",
        color: "red",
        icon: "/path/to/requirement-icon.png",
        links: [{ url: "#", text: "More Info" }],
      },
    ],
    size: "Large",
  },
};
