import PropTypes from 'prop-types';
import styles from './blog-layout-title.module.scss';

export const BlogLayoutTitle = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

BlogLayoutTitle.propTypes = {
  children: PropTypes.object,
};
