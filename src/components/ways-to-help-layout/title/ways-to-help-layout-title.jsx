import PropTypes from 'prop-types';
import styles from './ways-to-help-layout-title.module.scss';

export const WaysToHelpLayoutTitle = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

WaysToHelpLayoutTitle.propTypes = {
  children: PropTypes.object,
};
