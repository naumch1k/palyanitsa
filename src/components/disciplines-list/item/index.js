import PropTypes from 'prop-types';
import styles from './disciplines-list-item.module.scss';

export const DisciplinesListItem = ({ children }) => {
  return (
    <li className={styles.root}>
      {children}
    </li>
  );
};

DisciplinesListItem.propTypes = {
  children: PropTypes.node,
};
