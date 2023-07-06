import PropTypes from 'prop-types';
import styles from './partners-list-item.module.scss';

export const PartnersListItem = ({ name, logo, link }) => {
  return (
    <li className={styles.root}>
      {link
        ? (
          <a className={styles.link} href={link} target="_blank" rel="noreferrer">
            <img className={styles.logo} src={logo} alt={`${name} logo`}/>
          </a>
        ) : (
          <img className={styles.logo} src={logo} alt={`${name} logo`}/>
        )}
    </li>
  );
};

PartnersListItem.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
};
