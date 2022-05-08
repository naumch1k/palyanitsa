import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './text-link.module.css';

const cn = classNames.bind(styles);

export const TextLink = (props) => {
  const {
    isOutsideLink = false,
    href = '/',
    hoverStyle = 'underline',
    children,
    ...restLinkProps
  } = props;

  const classes = cn(
    'link',
    [hoverStyle],
  );

  return (
    !isOutsideLink ? (
      <Link href={href}>
        <a
          className={classes}
          {...restLinkProps}
        >
          {children}
        </a>
      </Link>
    ) : (
      <a
        href={href}
        className={classes}
        {...restLinkProps}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  );
};
