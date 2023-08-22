import PropTypes from 'prop-types';
import styles from './news-list-item.module.scss';

export const NewsListItem = ({ children }) => {
  return (
    <li className={styles.root}>
      {children}
    </li>
  );
};

NewsListItem.propTypes = {
  children: PropTypes.node,
};
