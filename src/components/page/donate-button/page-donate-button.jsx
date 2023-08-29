import PropTypes from 'prop-types';
import styles from './page-donate-button.module.scss';

export const PageDonateButton = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

PageDonateButton.propTypes = {
  children: PropTypes.object,
};
