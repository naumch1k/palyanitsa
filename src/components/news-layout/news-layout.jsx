import PropTypes from 'prop-types';
import styles from './news-layout.module.scss';

export const NewsLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

NewsLayout.propTypes = {
  children: PropTypes.node,
};
