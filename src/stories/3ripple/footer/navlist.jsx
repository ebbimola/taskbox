import React from 'react';
import { List } from '../list/List';
import { Text } from '../text/text';

import styles from './navlist.module.scss';

export const Navlist = ({ title, children }) => {
  return (
    <div className={styles['nav-list']}>
      {title && (
        <Text as='h2' size='T400' weight='bold' color='inherit'>
          {title}
        </Text>
      )}
      {children && <List noMarker>{children}</List>}
    </div>
  );
};
