// import React from "react";
import "./list.css";
import PropTypes from "prop-types";

export const List = ({ steps, size, showIcons, showLinks }) => {
  return (
    <div className="container">
      {steps.map((step, index) => (
        <div
          key={index}
          className="step"
          style={{ borderColor: step.color, ...getSizeStyles(size) }}
        >
          {showIcons && step.icon && (
            <img src={step.icon} alt={`${step.name} icon`} className="icon" />
          )}
          <div className="textContainer">
            <div className="title">{step.name}</div>
            {showLinks && step.links && (
              <div className="links">
                {step.links.map((link, i) => (
                  <a key={i} href={link.url} className="link">
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      icon: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  showIcons: PropTypes.bool,
  showLinks: PropTypes.bool,
};

List.defaultProps = {
  steps: [],
  size: "medium",
  showIcons: true,
  showLinks: true,
};

const getSizeStyles = (size) => {
  switch (size) {
    case "small":
      return { padding: "10px 20px", fontSize: "14px", width: "200px" };
    case "large":
      return { padding: "30px 40px", fontSize: "40px", width: "600px" };
    default:
      return {
        padding: "20px 30px",
        fontSize: "20px",
        width: "400px",
      };
  }
};
