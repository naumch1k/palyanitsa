import PropTypes from 'prop-types';
import styles from './blog-layout.module.scss';

export const BlogLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node,
};
