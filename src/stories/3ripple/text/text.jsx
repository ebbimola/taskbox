import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './text.module.scss';

export const Text = ({
  as: Element = 'p',
  size = 'T300',
  weight,
  alignment,
  italic,
  color,
  transform,
  decoration,
  marginBottom,
  children,
  className,
  ...props
}) => (
  <Element
    className={clsx(
      {
        [styles.text]: true,
        [styles['text--align-center']]: alignment === 'center',
        [styles['text--align-center-sm']]: alignment === 'center-sm',
        [styles['text--style-italic']]: italic,
        [styles['text--color-default']]: color === 'default',
        [styles['text--color-inherit']]: color === 'inherit',
        [styles['text--color-success']]: color === 'success',
        [styles['text--color-error']]: color === 'error',
        [styles['text--color-warning']]: color === 'warning',
        [styles['text--color-info']]: color === 'info',
        [styles['text--color-light']]: color === 'light',
        [styles['text--color-dark']]: color === 'dark',
        [styles['text--transform-uppercase']]: transform === 'uppercase',
        [styles['text--transform-lowercase']]: transform === 'lowercase',
        [styles['text--transform-capitalize']]: transform === 'capitalize',
        [styles['text--decoration-underline']]: decoration === 'underline',
        [styles['text--decoration-strikethrough']]: decoration === 'strikethrough',
        [styles['text--size-T900']]: size === 'T900',
        [styles['text--size-T800']]: size === 'T800',
        [styles['text--size-T700']]: size === 'T700',
        [styles['text--size-T600']]: size === 'T600',
        [styles['text--size-T500']]: size === 'T500',
        [styles['text--size-T400']]: size === 'T400',
        [styles['text--size-T300']]: size === 'T300',
        [styles['text--size-T200']]: size === 'T200',
        [styles['text--weight-light']]: weight === 'light',
        [styles['text--weight-regular']]: weight === 'regular',
        [styles['text--weight-medium']]: weight === 'medium',
        [styles['text--weight-bold']]: weight === 'bold',
        [styles['text--weight-heavy']]: weight === 'heavy',
        [styles['text--margin-bottom']]: marginBottom,
      },
      className
    )}
    {...props}
  >
    {children}
  </Element>
);

Text.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'sub', 'sup', 'span', 'dt', 'dd', 'figcaption', 'div']),
  size: PropTypes.oneOf(['T200', 'T300', 'T400', 'T500', 'T600', 'T700', 'T800', 'T900']),
  weight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold', 'heavy']),
  alignment: PropTypes.oneOf(['center', 'center-sm']),
  italic: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'inherit', 'success', 'error', 'warning', 'info', 'light', 'dark']),
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
  decoration: PropTypes.oneOf(['underline', 'strikethrough']),
  marginBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// export default Text;
