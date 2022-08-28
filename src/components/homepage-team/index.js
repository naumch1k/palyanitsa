import PropTypes from 'prop-types';

import { TeamList } from '../team-list';

import styles from './homepage-team.module.scss';

export const HomepageTeam = ({ title, description, team }) => (
  <>
    <div className={styles.content}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>
          {description && description.map((paragraph, idx) =>
            <p
              className={styles.paragraph}
              key={idx}
            >
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </div>
    <div className={styles.photoGallery}>
      <TeamList
        team={team}
      />
    </div>
  </>
);

HomepageTeam.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  team: PropTypes.array
};
