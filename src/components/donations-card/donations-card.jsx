import PropTypes from 'prop-types';
import { ArrowLink } from '../ui/arrow-link';
import styles from './donations-card.module.scss';

export const DonationsCard = ({
  text,
  link,
  linkText,
  qrCode,
  qrCodeWebp,
  credentials,
}) => {

  return (
    <div className={styles.root}>
      {qrCode
        && <picture>
          <source type="image/webp" srcSet={qrCodeWebp}/>
          <img  className={styles.qrCode} src={qrCode}/>
        </picture>
      }
      <div className={styles.info}>
        <p className={styles.text}>
          {text}{' '}
          {/* TODO: think on better solution */}
          {credentials && <span className={styles.credentials}>{credentials}</span>}
        </p>
        {link && <ArrowLink
          href={link}
          linkText={linkText}
        />}
      </div>
    </div>
  );
};

DonationsCard.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  qrCode: PropTypes.string,
  qrCodeWebp: PropTypes.string,
  credentials: PropTypes.string,
};
