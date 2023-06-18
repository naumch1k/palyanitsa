import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export const Button = (props) => {
  const {
    type = 'button',
    href,
    isLink,
    label,
    disabled = false,
    target,
    ...restButtonProps
  } = props;

  const buttonChildren = (
    <React.Fragment>
      {<span>
        {label}
      </span>}
    </React.Fragment>
  );

  return (
    !isLink ? (
      <button
        className={styles.root}
        type={type}
        disabled={disabled}
        {...restButtonProps}
      >
        {buttonChildren}
      </button>
    ) : (
      <a
        className={`${styles.root} ${styles.link}`}
        href={href}
        target={target}
        {...restButtonProps}
      >
        {buttonChildren}
      </a>
    )
  );
};

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  isLink: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  target: PropTypes.string
};
