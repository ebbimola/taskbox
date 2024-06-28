'use client';

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './horizontal-rule.module.scss';

export const HorizontalRule = ({ spacing, ...props }) => (
  <hr
    className={clsx({
      [styles['horizontal-rule']]: true,
      [styles['horizontal-rule--margin-none']]: spacing === 'none',
      [styles['horizontal-rule--margin-xs']]: spacing === 'xs',
      [styles['horizontal-rule--margin-sm']]: spacing === 'sm',
      [styles['horizontal-rule--margin-md']]: spacing === 'md',
      [styles['horizontal-rule--margin-lg']]: spacing === 'lg',
    })}
    {...props}
  />
);

HorizontalRule.propTypes = {
  spacing: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg']).isRequired,
};

// export default HorizontalRule;
