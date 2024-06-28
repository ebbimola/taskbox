import { SingleLogo } from "./logo/logo.jsx";
import PropTypes from "prop-types";

export const ThreeRippleMobileFooter = ({
  className,
  logoSrc,
  links,
  socialIcons,
  ...props
}) => {
  return (
    <footer
      className={
        "pt-[27px] pr-[26px] pb-5 pl-[23px] flex flex-col gap-[5px] items-start justify-start w-80 relative overflow-hidden " +
        className
      }
      style={{
        background:
          "var(--blue-gray-gradient, linear-gradient(180deg, rgba(0, 111, 245, 0.80) 0%,rgba(121, 135, 151, 0.80) 100%))",
      }}
      {...props}
    >
      <div className="pb-5 pl-[19px] flex flex-col gap-[30px] items-start justify-start shrink-0 w-[140px] relative overflow-hidden">
        <SingleLogo
          logoSrc={logoSrc}
          className="!shrink-0 !w-10 !h-[24.86px]"
        />
        <div className="flex flex-col gap-3 items-center justify-center shrink-0 w-12 relative overflow-hidden">
          {links.map((linkGroup, index) => (
            <div
              key={index}
              className="pt-2.5 pl-1.5 flex flex-col gap-2 items-start justify-start shrink-0 w-[55px] relative overflow-hidden"
            >
              {linkGroup.map((link, idx) => (
                <div
                  key={idx}
                  className="text-[#ffffff] text-center font-['Inter-Medium',_sans-serif] text-[10px] leading-[14px] font-medium relative flex items-center justify-center"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-px pr-[5px] pl-[5px] flex flex-col gap-2 items-start justify-center shrink-0 w-[280px] max-w-[300px] relative overflow-hidden">
        <div className="flex flex-row gap-0.5 items-center justify-start shrink-0 w-[266px] relative overflow-hidden">
          <div className="text-white text-center font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[69px]">
            Privacy Policy
          </div>
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[4.49px]">
            |
          </div>
          <div className="text-white text-center font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[66px]">
            Cookie Policy
          </div>
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[4.49px]">
            |
          </div>
          <div className="text-white text-center font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[106px]">
            Terms and Conditions
          </div>
        </div>
        <div className="flex flex-row gap-3.5 items-center justify-center shrink-0 relative overflow-hidden">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              className="shrink-0 w-[15.28px] h-[15.28px] relative overflow-visible"
              src={icon}
              alt={`social-icon-${index}`}
            />
          ))}
        </div>
        <div className="flex flex-row gap-0 items-center justify-start shrink-0 relative overflow-hidden">
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[29.18px]">
            2024
          </div>
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[10px] leading-[120%] font-medium relative w-[105px]">
            3ripple States Limited
          </div>
        </div>
      </div>
    </footer>
  );
};

ThreeRippleMobileFooter.propTypes = {
  className: PropTypes.string,
  logoSrc: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  socialIcons: PropTypes.arrayOf(PropTypes.string),
};
