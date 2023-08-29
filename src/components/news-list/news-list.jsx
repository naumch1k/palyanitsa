import PropTypes from 'prop-types';
import styles from './news-list.module.scss';

export const NewsList = ({ children }) => {
  return (
    <ul className={styles.root}>
      {children}
    </ul>
  );
};

NewsList.propTypes = {
  children: PropTypes.node,
};
