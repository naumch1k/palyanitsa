import PropTypes from 'prop-types';
import styles from './blog-entry-layout.module.scss';

export const BlogEntryLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

BlogEntryLayout.propTypes = {
  children: PropTypes.array
};
