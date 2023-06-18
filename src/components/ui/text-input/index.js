import PropTypes from 'prop-types';
import styles from './text-input.module.scss';

export const TextInput = ({
  error,
  errorMessage,
  ...restProps
}) => {

  return (
    <div>
      <input
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

TextInput.propTypes = {
  error: PropTypes.string,
  errorMessage: PropTypes.string,
};
