import PropTypes from 'prop-types';
import styles from './blog-entry-layout-headline.module.scss';

export const BlogEntryLayoutHeadline = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

BlogEntryLayoutHeadline.propTypes = {
  children: PropTypes.node.isRequired,
};
