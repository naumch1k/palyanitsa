import { useState } from 'react';
import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';
import { ImageGallery } from '../image-gallery';
import styles from './homepage-team.module.scss';

const roleButtons = [
  { role: '', label: 'All' },
  { role: 'game', label: 'Game Dev' },
  { role: 'web', label: 'Web' },
  { role: 'design', label: 'Design' },
  { role: 'mentor', label: 'Mentors' },
];

export const HomepageTeam = ({
  tag,
  title,
  subtitle,
  headline_image,
  team,
}) => {

  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelect = role => setSelectedRole(role);

  const filteredTeam = selectedRole
    ? team.filter(teamMember => teamMember.roles.includes(selectedRole))
    : team;

  return (
    <>
      <SectionHeadline
        tag={tag}
        title={title}
        subtitle={subtitle}
        image={headline_image}
      >
        <div className={styles.buttons}>
          {roleButtons.map(({ role, label }) => (
            <button
              key={role}
              className={`${styles.button} ${selectedRole === role ? styles.selected : ''}`}
              onClick={() => handleRoleSelect(role)}
            >
              {label}
            </button>
          ))}
        </div>
      </SectionHeadline>
      <ImageGallery>
        {filteredTeam.map((teamMember, i) => (
          <li key={i} className={styles.imageWrapper}>
            <img className={styles.image} src={teamMember.image}/>
          </li>
        ))}
      </ImageGallery>
    </>
  );
};

HomepageTeam.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  headline_image: PropTypes.string.isRequired,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
