import PropTypes from 'prop-types';
import styles from './news-card.module.scss';

export const NewsCard = ({
  date,
  heading,
  text,
  image,
}) => {

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.date}>{date}</p>
      <img className={styles.image} src={image} alt={''}/>
      <div className={styles.paragraphs}>
        {text.map((paragraph, i) => (
          <p className={styles.paragraph} key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};
