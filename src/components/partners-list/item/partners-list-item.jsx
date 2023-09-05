import PropTypes from 'prop-types';
import styles from './partners-list-item.module.scss';

export const PartnersListItem = ({
  name,
  logos,
  link,
}) => {

  return (
    <li className={styles.root}>
      {link
        ? (
          <a
            className={styles.link}
            href={link}
            aria-label={`Visit ${name} website`}
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <source type="image/webp" srcSet={logos.webp}/>
              <img className={styles.logo} src={logos.png} alt={`${name} logo`}/>
            </picture>
          </a>
        ) : (
          <picture>
            <source type="image/webp" srcSet={logos.webp}/>
            <img className={styles.logo} src={logos.png} alt={`${name} logo`}/>
          </picture>
        )}
    </li>
  );
};

PartnersListItem.propTypes = {
  name: PropTypes.string,
  logos: PropTypes.object,
  link: PropTypes.string,
};
