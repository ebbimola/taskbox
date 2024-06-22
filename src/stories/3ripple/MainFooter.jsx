import React from "react";
import PropTypes from "prop-types";
import { SingleLogo } from "./3rippleLogo";
import "./MainFooter.css";

export const ThreeRippleFooter = ({
  className,
  logosrc,
  links,
  socialIcons,
  policies,
  ...props
}) => {
  return (
    <div className={"_3-ripple-footer " + className} {...props}>
      <div className="_3-ripple-footer-sub">
        <div className="third-level-footer-frame">
          <SingleLogo src={logosrc} className="single-logo-instance" />
          <div className="list-frame">
            {links.map((linkGroup, index) => (
              <div key={index} className={`list-${index + 1}`}>
                {linkGroup.map((link, idx) => (
                  <div key={idx} className={idx === 0 ? "title" : "project"}>
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="social-and-copyright-frame">
          <div className="social">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className={`vector${index}`}
                src={icon}
                alt={`social-icon-${index}`}
              />
            ))}
          </div>
          <div className="policy-list">
            {policies.map((policy, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="div">| </div>}
                <div className={policy.className}>{policy.text}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="copyright">
            <div className="_2024">2024 </div>
            <div className="_3-ripple-states-limited">
              3ripple States Limited{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ThreeRippleFooter.propTypes = {
  className: PropTypes.string,
  logosrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  socialIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  policies: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ThreeRippleFooter.defaultProps = {
  className: "",
};
