import PropTypes from 'prop-types';
import styles from './image-gallery.module.scss';

export const ImageGallery = ({ children }) => {
  return (
    <ul className={styles.root}>
      {children}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.node,
};
