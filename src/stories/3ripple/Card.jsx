import clsx from "clsx";
// import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export const Card = ({
  icon,
  title,
  body,
  altext,
  link,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles["card"], className)} {...props}>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["icon"]}>
        <img src={icon} alt={altext}></img>
      </div>
      <div className={styles["body"]}>{body}</div>
      <div className={styles["link"]}>{link}</div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  altext: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.node,
  className: PropTypes.string,
};
