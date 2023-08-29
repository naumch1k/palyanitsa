import PropTypes from 'prop-types';
import styles from './text-input.module.scss';

export const TextInput = ({
  type = 'text',
  error,
  errorMessage,
  ...restProps
}) => {

  return (
    <div>
      <input
        className={styles.root}
        type={type}
        {...restProps}
      />
      <p className={styles.inputError}>
        {error && errorMessage}
      </p>
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  errorMessage: PropTypes.string,
};
