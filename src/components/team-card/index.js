import PropTypes from 'prop-types';

import styles from './team-card.module.scss';

export const TeamCard = props => {
  const {
    image,
    name,
    role,
    cardSize
  } = props;

  let classes = [styles.content, cardSize && styles[`content${cardSize}`]].join(' ');

  return (
    <li className={styles.root}>
      <div className={classes}>
        <img
          className={styles.image}
          src={image}
          alt=""
        />
        <div className={styles.infoContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}> {role}</p>
        </div>
      </div>
    </li>
  );
};

TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  cardSize: PropTypes.string,
};
