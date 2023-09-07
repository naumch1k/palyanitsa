import PropTypes from 'prop-types';
import styles from './page-subtitle.module.scss';

export const PageSubtitle = ({ text }) => {
  return (
    <h2 className={styles.root}>{text}</h2>
  );
};

PageSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};
