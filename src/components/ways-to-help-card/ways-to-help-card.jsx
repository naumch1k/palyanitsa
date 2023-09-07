import PropTypes from 'prop-types';
import { ArrowLink } from '../ui/arrow-link';
import styles from './ways-to-help-card.module.scss';

export const WaysToHelpCard = ({ data }) => {
  const {
    full_description,
    link,
    linkText,
  } = data;

  return (
    <div className={styles.root}>
      {full_description.map((paragraph, i) => (
        <p key={i} className={styles.paragraph}>{paragraph}</p>
      ))}
      {link && <ArrowLink
        className={styles.link}
        href={link}
        linkText={linkText}
      />}
    </div>
  );

};

WaysToHelpCard.propTypes = {
  data: PropTypes.shape({
    full_description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};
