import PropTypes from 'prop-types';
import styles from './page-title.module.scss';

export const PageTitle = ({ text }) => {
  return (
    <h1 className={styles.root}>
      {text}
    </h1>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
