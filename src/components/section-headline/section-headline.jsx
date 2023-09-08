import PropTypes from 'prop-types';
import { PageSubtitle } from '../page-subtitle';
import styles from './section-headline.module.scss';

export const SectionHeadline = ({
  title,
  subtitle,
  images,
  children,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <picture>
            <source type="image/webp" media="(min-width: 1440px)" srcSet={images.desktopWebp}/>
            <source type="image/webp" media="(min-width: 428px)" srcSet={images.tabletWebp}/>
            <source type="image/webp" srcSet={images.mobileWebp}/>

            <source media="(min-width: 1440px)" srcSet={images.desktop}/>
            <source media="(min-width: 428px)" srcSet={images.tablet}/>
            <img className={styles.image} src={images.mobile} alt="Group of teenagers gathered together"/>
          </picture>
        </div>
        <div className={styles.imageColumnContent}>
          {children}
        </div>
      </div>
      <div className={styles.contentColumn}>
        <PageSubtitle className={styles.title} text={title}/>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

SectionHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  children: PropTypes.node,
};
