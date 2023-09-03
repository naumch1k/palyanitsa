import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FullLogo from './../../shared/images/full-logo.png';
import FullLogoWebp from './../../shared/images/full-logo.webp';
import styles from './logotype.module.scss';

export const Logotype = ({
  className,
  href = '/',
}) => {

  return (
    <Link
      className={`${className} ${styles.link}`}
      to={href}
      aria-label="Go to home page"
    >
      <picture>
        <source type="image/webp" srcSet={FullLogoWebp}/>
        <img className={styles.image} src={FullLogo} alt="Palianytsia Foundation logo"/>
      </picture>
    </Link>
  );
};

Logotype.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};
