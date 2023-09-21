import PropTypes from 'prop-types';
import styles from './blog-entry-layout-content.module.scss';

export const BlogEntryLayoutContent = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

BlogEntryLayoutContent.propTypes = {
  children: PropTypes.array.isRequired,
};
