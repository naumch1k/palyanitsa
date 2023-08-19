import PropTypes from 'prop-types';
import styles from './disciplines-card.module.scss';

export const DisciplinesCard = ({
  id,
  heading,
  description,
  icon,
}) => {

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={icon} alt={heading}/>
      <h3 className={styles.heading}>
        <span className={styles.headingAccent}>{id}.</span>
        {heading}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

DisciplinesCard.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
