import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './story-card.module.scss';

export const StoryCard = ({ data }) => {
  const {
    id,
    heading,
    image_tablet,
    image_tablet_webp,
    image_mobile,
    image_mobile_webp,
  } = data;

  return (
    <Link className={styles.link} to={`${id}`} aria-label={`Read: ${heading}`}>
      <picture className={styles.imageWrapper}>
        <source type="image/webp" media="(min-width: 428px)" srcSet={image_tablet_webp}/>
        <source type="image/webp" srcSet={image_mobile_webp}/>

        <source media="(min-width: 428px)" srcSet={image_tablet}/>
        <img className={styles.image} src={image_mobile} alt={''}/>
      </picture>
      <h2 className={styles.heading}>
        {heading}
        <span className={styles.arrow}>➞</span>
      </h2>
    </Link>
  );
};

StoryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image_tablet: PropTypes.string.isRequired,
    image_tablet_webp: PropTypes.string,
    image_mobile: PropTypes.string,
    image_mobile_webp: PropTypes.string,
  }).isRequired,
};
