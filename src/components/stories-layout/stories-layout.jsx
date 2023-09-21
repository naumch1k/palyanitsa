import PropTypes from 'prop-types';
import styles from './stories-layout.module.scss';

export const StoriesLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

StoriesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
