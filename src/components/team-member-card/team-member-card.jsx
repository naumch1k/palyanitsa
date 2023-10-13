import PropTypes from 'prop-types';
import { FaLinkedin } from 'react-icons/fa';
import styles from './team-member-card.module.scss';

export const TeamMemberCard = ({ data }) => {
  const {
    first_name,
    last_name,
    roles,
    image_large,
    image_large_webp,
    image_mobile,
    image_mobile_webp,
    linkedin_link,
  } = data;

  return (
    <li className={styles.root}>
      <picture>
        <source type="image/webp" media="(min-width: 428px)" srcSet={image_large_webp}/>
        <source type="image/webp" srcSet={image_mobile_webp}/>

        <source media="(min-width: 428px)" srcSet={image_large}/>
        <img className={styles.image} src={image_mobile} alt={`${first_name} ${last_name}`}/>
      </picture>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {first_name}{' '}
          <span className={styles.nonBreakable}>
            {last_name && last_name}
            {linkedin_link
            && <a
              href={linkedin_link}
              className={styles.socialIcon}
              aria-label={`Visit ${first_name}'s LinkedIn Profile`}
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
  data: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    image_large: PropTypes.string.isRequired,
    image_large_webp: PropTypes.string,
    image_mobile: PropTypes.string,
    image_mobile_webp: PropTypes.string,
    linkedin_link: PropTypes.string,
  })
};
