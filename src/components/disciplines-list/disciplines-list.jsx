import PropTypes from 'prop-types';
import styles from './disciplines-list.module.scss';

export const DisciplinesList = ({ children }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.root}>
        {children}
      </ul>
    </div>
  );
};

DisciplinesList.propTypes = {
  children: PropTypes.node,
};
