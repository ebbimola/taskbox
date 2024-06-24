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
        [styles.type]: true,
        [styles['type--align-center']]: alignment === 'center',
        [styles['type--align-center-sm']]: alignment === 'center-sm',
        [styles['type--style-italic']]: italic,
        [styles['type--color-default']]: color === 'default',
        [styles['type--color-inherit']]: color === 'inherit',
        [styles['type--color-success']]: color === 'success',
        [styles['type--color-error']]: color === 'error',
        [styles['type--color-warning']]: color === 'warning',
        [styles['type--color-info']]: color === 'info',
        [styles['type--color-light']]: color === 'light',
        [styles['type--color-dark']]: color === 'dark',
        [styles['type--transform-uppercase']]: transform === 'uppercase',
        [styles['type--transform-lowercase']]: transform === 'lowercase',
        [styles['type--transform-capitalize']]: transform === 'capitalize',
        [styles['type--decoration-underline']]: decoration === 'underline',
        [styles['type--decoration-strikethrough']]: decoration === 'strikethrough',
        [styles['type--size-T900']]: size === 'T900',
        [styles['type--size-T800']]: size === 'T800',
        [styles['type--size-T700']]: size === 'T700',
        [styles['type--size-T600']]: size === 'T600',
        [styles['type--size-T500']]: size === 'T500',
        [styles['type--size-T400']]: size === 'T400',
        [styles['type--size-T300']]: size === 'T300',
        [styles['type--size-T200']]: size === 'T200',
        [styles['type--weight-light']]: weight === 'light',
        [styles['type--weight-regular']]: weight === 'regular',
        [styles['type--weight-medium']]: weight === 'medium',
        [styles['type--weight-bold']]: weight === 'bold',
        [styles['type--weight-heavy']]: weight === 'heavy',
        [styles['type--margin-bottom']]: marginBottom,
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
