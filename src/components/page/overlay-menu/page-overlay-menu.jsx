import PropTypes from 'prop-types';

import styles from './page-overlay-menu.module.scss';

export const PageOverlayMenu = ({ isOpen, children }) => {
  return (
    <div className={`${styles.root} ${isOpen ? `${styles.isOpen}` : ''}`}>
      {children}
    </div>
  );
};

PageOverlayMenu.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.object
};
