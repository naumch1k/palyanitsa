import PropTypes from 'prop-types';

import { TeamCard } from '../team-card';

import styles from './team-list.module.scss';

export const TeamList = ({ team }) => {
  return (
    <ul className={styles.root}>
      {team && team.map(member =>
        <TeamCard
          image={member.image}
          name={member.name}
          role={member.role}
          cardSize={member.cardSize}
          key={member.id}
        />
      )}
    </ul>
  );

};

TeamList.propTypes = {
  team: PropTypes.array
};
