import PropTypes from 'prop-types';
import styles from './text-link.module.scss';

export const TextLink = ({
  isOutsideLink = false,
  href = '/',
  children,
  ...restLinkProps
}) => {

  return (
    !isOutsideLink ? (
      <a
        href={href}
        className={styles.root}
        {...restLinkProps}
      >
        {children}
      </a>
    ) : (
      <a
        href={href}
        className={styles.root}
        {...restLinkProps}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  );
};

TextLink.propTypes = {
  isOutsideLink: PropTypes.bool,
  href: PropTypes.string,
  hoverStyle: PropTypes.string,
  children: PropTypes.string
};
