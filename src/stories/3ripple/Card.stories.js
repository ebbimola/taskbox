import { Card } from "./Card";

export default {
  title: "Cards/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Card Title",
    body: "Card Body",
    icon: "https://via.placeholder.com/150",
  },
};

export const WithImage = {
  args: {
    title: "Card Title",
    body: "Card Body",
    icon: "https://via.placeholder.com/150",
    iconAlt: "Placeholder Image",
    link: "#",
    className: "custom-class",
  },
};

export const WithLink = {
  args: {
    title: "Card Title",
    body: "Card Body",
  },
};

// export const WithButton = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     buttonText: "Click Me",
//   },
// };

// export const WithImageAndButton = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//   },
// };

// export const WithImageAndLink = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     imageSrc: "https://via.placeholder.com/150",
//     imageAlt: "Placeholder Image",
//     linkText: "Learn More",
//     linkHref: "#",
//   },
// };

// export const WithLinkAndButton = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     linkText: "Learn More",
//     linkHref: "#",
//     buttonText: "Click Me",
//   },
// };

// export const WithImageLinkAndButton = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     imageSrc: "https://via.placeholder.com/150",
//     imageAlt: "Placeholder Image",
//     linkText: "Learn More",
//     linkHref: "#",
//     buttonText: "Click Me",
//   },
// };

// export const WithClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     className: "custom-class",
//   },
// };

// export const WithImageClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     imageSrc: "https://via.placeholder.com/150",
//     imageAlt: "Placeholder Image",
//     imageClassName: "custom-class",
//   },
// };

// export const WithLinkClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     linkText: "Learn More",
//     linkHref: "#",
//     linkClassName: "custom-class",
//   },
// };

// export const WithButtonClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     buttonText: "Click Me",
//     buttonClassName: "custom-class",
//   },
// };

// export const WithImageAndButtonClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     imageSrc: "https://via.placeholder.com/150",
//     imageAlt: "Placeholder Image",
//     buttonText: "Click Me",
//     imageClassName: "custom-class",
//     buttonClassName: "custom-class",
//   },
// };

// export const WithImageAndLinkClassName = {
//   args: {
//     title: "Card Title",
//     body: "Card Body",
//     imageSrc: "https://via.placeholder.com/150",
//     imageAlt: "Placeholder Image",
//     linkText: "Learn More",
//     linkHref: "#",
//     imageClassName: "custom-class",
//     linkClassName: "custom-class",
//   },
// };
