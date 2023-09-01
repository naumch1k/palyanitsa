import PropTypes from 'prop-types';
import { FaLinkedin } from 'react-icons/fa';
import styles from './team-member-card.module.scss';

export const TeamMemberCard = ({
  images,
  firstName,
  lastName,
  linkedIn,
  roles,
}) => {

  return (
    <li className={styles.root}>
      <picture>
        <source type="image/webp" media="(min-width: 428px)" srcSet={images.largeWebp}/>
        <source type="image/webp" srcSet={images.mobileWebp}/>

        <source media="(min-width: 428px)" srcSet={images.large}/>
        <img className={styles.image} src={images.mobile} alt={`${firstName} ${lastName}`}/>
      </picture>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {firstName}{' '}
          <span className={styles.nonBreakable}>
            {lastName}
            {linkedIn
            && <a
              href={linkedIn}
              className={styles.socialIcon}
              aria-label={`Visit ${firstName}'s LinkedIn Profile`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin/>
            </a>
            }
          </span>
        </h3>
        <p className={styles.roles}>{roles.join(', ')}</p>
      </div>
    </li>
  );
};

TeamMemberCard.propTypes = {
  images: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  linkedIn: PropTypes.string,
};
