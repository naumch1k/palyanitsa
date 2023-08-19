import PropTypes from 'prop-types';
import styles from './text-link.module.scss';

export const TextLink = ({
  isOutsideLink = false,
  href = '/',
  hoverStyle = 'underline',
  children,
  ...restLinkProps
}) => {

  // TODO: utilize useEffect to track resizing and re-render
  const classes = `${styles.link} ${window.innerWidth >= 1000 ? styles[hoverStyle] : ''}`;

  return (
    !isOutsideLink ? (
      <a
        href={href}
        className={classes}
        {...restLinkProps}
      >
        {children}
      </a>
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

TextLink.propTypes = {
  isOutsideLink: PropTypes.bool,
  href: PropTypes.string,
  hoverStyle: PropTypes.string,
  children: PropTypes.string
};
