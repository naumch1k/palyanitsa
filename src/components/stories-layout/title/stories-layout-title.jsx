import PropTypes from 'prop-types';
import styles from './stories-layout-title.module.scss';

export const StoriesLayoutTitle = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

StoriesLayoutTitle.propTypes = {
  children: PropTypes.object,
};
