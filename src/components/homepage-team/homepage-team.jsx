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
  title,
  subtitle,
  headlineImages,
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
        title={title}
        subtitle={subtitle}
        images={headlineImages}
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
          <TeamMemberCard key={i} data={teamMember}/>
        ))}
      </ImageGallery>
    </>
  );
};

HomepageTeam.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  headlineImages: PropTypes.object.isRequired,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string,
      roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      image_large: PropTypes.string.isRequired,
      image_large_webp: PropTypes.string,
      image_mobile: PropTypes.string,
      image_mobile_webp: PropTypes.string,
      linkedin_link: PropTypes.string,
    })
  ).isRequired,
};
