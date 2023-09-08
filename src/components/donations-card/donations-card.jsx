import PropTypes from 'prop-types';
import { ArrowLink } from '../ui/arrow-link';
import styles from './donations-card.module.scss';

export const DonationsCard = ({ data }) => {
  const {
    description,
    link,
    linkText,
    qrCode,
    qrCodeWebp,
    credentials,
  } = data;

  return (
    <div className={styles.root}>
      {qrCode && (
        <picture>
          <source type="image/webp" srcSet={qrCodeWebp}/>
          <img  className={styles.qrCode} src={qrCode}/>
        </picture>
      )}
      <div className={styles.info}>
        <p className={styles.text}>
          {description}{' '}
        </p>
        {credentials?.length && (
          credentials.map((paragraph, i) => (
            <p key={i} className={styles.credentials}>{paragraph}</p>
          ))
        )}
        {link && (
          <ArrowLink
            href={link}
            linkText={linkText}
          />
        )}
      </div>
    </div>
  );
};

DonationsCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string,
    qrCode: PropTypes.string,
    qrCodeWebp: PropTypes.string,
    credentials: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
