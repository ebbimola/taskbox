import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Text } from '../text';
import styles from './card.module.css';

export const Card = ({ icon, title, body, className, image, ctas, ...props }) => {
  return (
    <div className={clsx(styles['card'], className)} {...props}>
      {image && <div className={styles['card__image']}>{image}</div>}
      <div className={clsx(styles['card__content'], className)}>
        {icon && <div className={styles['card__icon']}>{icon}</div>}
        <div className={styles['card__title']}>
          <Text size={'T500'} weight={'bold'} as={'h2'}>
            {title}
          </Text>
        </div>
        <div className={styles['card__body']}>
          <Text>{body}</Text>
        </div>
        {ctas && <div className={styles['card__link-container']}>{ctas}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  image: PropTypes.node,
  ctas: PropTypes.node,
  className: PropTypes.string,
};
