import PropTypes from 'prop-types';
import styles from './page-subtitle.module.scss';

export const PageSubtitle = ({ text, className }) => {
  return (
    <h2 className={`${styles.root} ${className}`}>{text}</h2>
  );
};

PageSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
