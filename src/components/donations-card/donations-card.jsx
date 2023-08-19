import PropTypes from 'prop-types';
import { ArrowLink } from '../ui/arrow-link';
import styles from './donations-card.module.scss';

export const DonationsCard = ({
  text,
  link,
  linkText,
  qrCode,
}) => {

  return (
    <div className={styles.root}>
      {qrCode && <img  className={styles.qrCode} src={qrCode}/>}
      <div className={styles.info}>
        <p className={styles.text}>
          {text}
        </p>
        <ArrowLink
          href={link}
          linkText={linkText}
        />
      </div>
    </div>
  );
};

DonationsCard.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  qrCode: PropTypes.string,
};
