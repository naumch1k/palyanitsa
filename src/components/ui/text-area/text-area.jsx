import PropTypes from 'prop-types';
import styles from './text-area.module.scss';

export const TextArea = ({
  error,
  errorMessage,
  ...restProps
}) => {

  return (
    <div>
      <textarea
        className={styles.root}
        type="text"
        {...restProps}
      />
      <p className={styles.inputError}>
        {error && errorMessage}
      </p>
    </div>
  );
};

TextArea.propTypes = {
  error: PropTypes.string,
  errorMessage: PropTypes.string,
};
