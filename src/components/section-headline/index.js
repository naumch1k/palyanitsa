import PropTypes from 'prop-types';
import styles from './section-headline.module.scss';

export const SectionHeadline = ({
  title,
  subtitle,
  tag,
  image,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image}/>
          <span className={styles.tag}>{tag}</span>
        </div>
      </div>
      <div className={styles.contentColumn}>
        <h2 className={styles.title}><span className={styles.titleAccent}>|</span> {title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

SectionHeadline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.string,
  image: PropTypes.string,
};
