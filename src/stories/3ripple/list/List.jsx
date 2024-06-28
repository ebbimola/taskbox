import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './list.module.scss';

export const List = ({
  as: Component = 'ul',
  className,
  children,
  noMarker,
  footer,
  noMargin,
  ...props
}) => (
  <Component
    className={clsx({
      [styles['list']]: true,
      [styles['list--ul']]: Component === 'ul',
      [styles['list--ol']]: Component === 'ol',
      [styles['list--no-marker']]: noMarker,
      [styles['list--footer']]: footer,
      [styles['list--no-margin']]: noMargin,
    }, className)}
    {...props}
  >
    {children}
  </Component>
);

List.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  children: PropTypes.node.isRequired,
  noMarker: PropTypes.bool,
  footer: PropTypes.bool,
  noMargin: PropTypes.bool,
  className: PropTypes.string,
};

List.defaultProps = {
  as: 'ul',
  noMarker: false,
  footer: true,
  noMargin: false,
  className: '',
};
