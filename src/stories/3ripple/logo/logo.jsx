import PropTypes from "prop-types";

export const SingleLogo = ({ logoAlt, logoSrc, className, ...props }) => {
  return (
    <div className={`w-[74.02px] h-[50px] relative ${className}`} {...props}>
      <img
        className={`w-full h-full absolute inset-0 overflow-visible ${className}`}
        src={logoSrc}
        alt={logoAlt}
      />
    </div>
  );
};

SingleLogo.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
};
