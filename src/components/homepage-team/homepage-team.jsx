import { useState } from 'react';
import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline/section-headline';
import { ImageGallery } from '../image-gallery';
import { TeamMemberCard } from '../team-member-card';
import styles from './homepage-team.module.scss';

const roleButtons = [
  { role: '', label: 'All' },
  { role: 'development', label: 'Development' },
  { role: 'art', label: 'Art' },
  { role: 'design', label: 'Design' },
  { role: 'project/product', label: 'Product / Project' },
  // TODO: make list of roles based on team data
  // { role: 'quality assurance', label: 'Quality assurance' },
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
          <TeamMemberCard
            key={i}
            image={teamMember.image}
            firstName={teamMember.firstName}
            lastName={teamMember.lastName}
            linkedIn={teamMember.linkedIn}
            roles={teamMember.roles}
          />
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
      image: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      linkedIn: PropTypes.string,
    })
  ).isRequired,
};
