import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './button.module.css';

const cn = classNames.bind(styles);

export const Button = (props) => {
  const {
    type = 'button',
    href = '/',
    isLink,
    label,
    disabled = false,
    target,
    ...restButtonProps
  } = props;

  const classes = cn('button');
  const buttonChildren = (
    <React.Fragment>
      {<span className={styles.label}>
        {label}
      </span>}
    </React.Fragment>
  );

  return (
    !isLink ? (
      <button
        className={classes}
        type={type}
        disabled={disabled}
        {...restButtonProps}
      >
        {buttonChildren}
      </button>
    ) : (
      <Link href={href} {...restButtonProps}>
        <a
          className={cn(classes, 'link')}
          target={target}
        >
          {buttonChildren}
        </a>
      </Link>
    )
  );
};
