import PropTypes from 'prop-types';
import styles from './arrow-button.module.scss';

export const ArrowButton = ({
  className,
  isLink = false,
  href,
  text,
  direction = 'right',
  onClick,
  ...restProps
}) => {

  const classes = `${className} ${styles.link} ${direction === 'left' ? styles.left : styles.right}`;
  const ArrowLinkChildren = (
    <>
      <span className={styles.text}>{text}</span>
      <div className={styles.arrows} aria-hidden>
        <span className={styles.arrow}>➞</span>
        <span className={styles.arrow}>➞</span>
      </div>
    </>
  );

  return (
    isLink ? (
      <a className={classes} href={href} {...restProps}>
        {ArrowLinkChildren}
      </a>
    ) : (
      <button className={classes} onClick={onClick}>
        {ArrowLinkChildren}
      </button>
    )
  );
};

ArrowButton.propTypes = {
  className: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};
