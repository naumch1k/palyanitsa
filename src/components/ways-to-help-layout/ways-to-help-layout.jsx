import PropTypes from 'prop-types';
import styles from './ways-to-help-layout.module.scss';

export const WaysToHelpLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

WaysToHelpLayout.propTypes = {
  children: PropTypes.node,
};
