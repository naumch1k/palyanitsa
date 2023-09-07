import PropTypes from 'prop-types';
import styles from './ways-to-help-layout-content.module.scss';

export const WaysToHelpLayoutContent = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

WaysToHelpLayoutContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
