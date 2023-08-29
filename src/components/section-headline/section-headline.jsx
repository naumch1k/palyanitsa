import PropTypes from 'prop-types';
import styles from './section-headline.module.scss';

export const SectionHeadline = ({
  title,
  subtitle,
  tag,
  image,
  children,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image}/>
        </div>
        <div className={styles.imageColumnContent}>
          {children}
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};
