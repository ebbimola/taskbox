import React from 'react';
import clsx from 'clsx';

import styles from './footer.module.scss';

export const Footer = ({
  className,
  columnOne,
  columnTwo,
  columnThree,
  socialLinks,
  legals,
  copyright,
}) => (
  <div className={clsx(styles['footer'], className)}>
    <div className={styles['footer__wrapper']}>
      <nav
        aria-label="Footer Links"
        className={styles['footer__navigation']}
      >
        <div
          className={clsx(
            styles['footer__navigation-links'],
            styles['footer__navigation-links-col-1']
          )}
        >
          {columnOne}
        </div>
        <div
          className={clsx(
            styles['footer__navigation-links'],
            styles['footer__navigation-links-col-2']
          )}
        >
          {columnTwo}
        </div>
        <div
          className={clsx(
            styles['footer__navigation-links'],
            styles['footer__navigation-links-col-3']
          )}
        >
          {columnThree}
        </div>
      </nav>
      <div className={styles['footer__socials']}>{socialLinks}</div>
      <div className={styles['footer__bottom']}>
        <div className={styles['footer__bottom-row']}>{legals}</div>
        <div className={styles['footer__bottom-legals']}>{copyright}</div>
      </div>
    </div>
    <div className={styles['footer__background-image']} />
  </div>
);