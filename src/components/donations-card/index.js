import PropTypes from 'prop-types';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
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
        <a className={styles.link} href={link} target="_blank" rel="noreferrer">
          {linkText}
          <div className={styles.arrows}>
            <span className={styles.arrow}>
              <MdOutlineArrowRightAlt/>
            </span>
            <span className={styles.arrow}>
              <MdOutlineArrowRightAlt/>
            </span>
          </div>
        </a>
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
