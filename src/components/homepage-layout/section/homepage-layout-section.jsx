import PropTypes from 'prop-types';
import { SectionHeadline } from '../../section-headline/section-headline';
import styles from './homepage-layout-section.module.scss';

export const HomepageLayoutSection = ({
  title,
  subtitle,
  headlineImages,
  children,
}) => {

  return (
    <section className={styles.root}>
      {headlineImages
        && <SectionHeadline
          title={title}
          subtitle={subtitle}
          images={headlineImages}
        />
      }
      {children}
    </section>
  );
};

HomepageLayoutSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headlineImages: PropTypes.object,
  children: PropTypes.object.isRequired,
};
