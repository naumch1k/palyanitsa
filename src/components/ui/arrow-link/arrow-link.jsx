import PropTypes from 'prop-types';
import styles from './arrow-link.module.scss';

export const ArrowLink = ({
  isInternalLink = false,
  href,
  linkText,
  direction = 'right',
}) => {

  const classes = `${styles.link} ${direction === 'left' ? styles.left : ''}`;

  return (
    isInternalLink ? (
      <a className={classes} href={href}>
        <div className={styles.arrows}>
          <span className={styles.arrow}>➞</span>
          <span className={styles.arrow}>➞</span>
        </div>
        {linkText}
      </a>
    ) : (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {linkText}
        <div className={styles.arrows}>
          <span className={styles.arrow}>➞</span>
          <span className={styles.arrow}>➞</span>
        </div>
      </a>
    )
  );
};

ArrowLink.propTypes = {
  isInternalLink: PropTypes.bool,
  href: PropTypes.string,
  linkText: PropTypes.string,
  direction: PropTypes.string,
};
