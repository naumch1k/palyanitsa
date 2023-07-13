import PropTypes from 'prop-types';
import { FaLinkedin } from 'react-icons/fa';
import styles from './team-member-card.module.scss';

export const TeamMemberCard = ({
  image,
  name,
  linkedIn,
  roles,
}) => {
  return (
    <li className={styles.root}>
      <img className={styles.image} src={image} alt={name}/>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {name}
          {linkedIn
          && <a
            href={linkedIn}
            className={styles.socialIcon}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin/>
          </a>
          }
        </h3>
        <p className={styles.roles}>{roles.join(', ')}</p>
      </div>
    </li>
  );
};

TeamMemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  linkedIn: PropTypes.string,
};
