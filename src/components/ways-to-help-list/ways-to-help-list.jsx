import { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styles from './ways-to-help-list.module.scss';

export const WaysToHelpList = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ul className={styles.root}>
      {children.map((child, index) => (
        cloneElement(child, {
          ...child,
          isActive: activeIndex === index,
          onSelect: () => setActiveIndex(activeIndex === index ? null : index),
        })
      )
      )}
    </ul>
  );
};

WaysToHelpList.propTypes = {
  children: PropTypes.node,
};
