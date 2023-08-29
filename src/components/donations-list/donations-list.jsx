import PropTypes from 'prop-types';
import styles from './donations-list.module.scss';

export const DonationsList = ({ children }) => {
  return (
    <div id="donations-anchor" className={styles.container}>
      <ul className={styles.root}>
        {children}
      </ul>
    </div>
  );
};

DonationsList.propTypes = {
  children: PropTypes.node,
};
