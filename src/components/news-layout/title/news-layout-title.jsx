import PropTypes from 'prop-types';
import styles from './news-layout-title.module.scss';

export const NewsLayoutTitle = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

NewsLayoutTitle.propTypes = {
  children: PropTypes.object,
};
