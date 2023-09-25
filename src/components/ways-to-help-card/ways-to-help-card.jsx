import PropTypes from 'prop-types';
import { ArrowButton } from '../ui/arrow-button';
import styles from './ways-to-help-card.module.scss';

export const WaysToHelpCard = ({ data }) => {
  const {
    description,
    full_description,
    link,
    linkText,
    credentials,
  } = data;

  return (
    <div className={styles.root}>
      {full_description.length ? (
        full_description.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>{paragraph}</p>
        ))
      ) : (
        description.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>{paragraph}</p>
        ))
      )}
      {credentials?.length && (
        credentials.map((paragraph, i) => (
          <p key={i} className={styles.credentials}>{paragraph}</p>
        ))
      )}
      {link && (
        <ArrowButton
          className={styles.link}
          isLink
          href={link}
          text={linkText}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </div>
  );

};

WaysToHelpCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.arrayOf(PropTypes.string),
    full_description: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    linkText: PropTypes.string,
    credentials: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
