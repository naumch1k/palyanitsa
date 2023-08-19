import PropTypes from 'prop-types';
import styles from './partners-list.module.scss';

export const PartnersList = ({ children }) => {
  return (
    <ul className={styles.root}>
      {children}
    </ul>
  );
};

PartnersList.propTypes = {
  children: PropTypes.node,
};
