import PropTypes from 'prop-types';
import styles from './progress-bar.module.scss';

export const ProgressBar = ({
  className,
  darkTheme = false,
  completed,
}) => {
  return (
    <div className={`
      ${className}
      ${styles.root}
      ${darkTheme ? `${styles.darkTheme}` : ''}
    `}>
      <div
        className={styles.completed}
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  darkTheme: PropTypes.bool,
  completed: PropTypes.number.isRequired,
};
