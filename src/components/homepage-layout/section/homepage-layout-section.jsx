import PropTypes from 'prop-types';
import { SectionHeadline } from '../../section-headline/section-headline';
import styles from './homepage-layout-section.module.scss';

export const HomepageLayoutSection = ({
  title,
  subtitle,
  tag,
  headline_image,
  children,
}) => {

  return (
    <section className={styles.root}>
      {headline_image
        && <SectionHeadline
          tag={tag}
          title={title}
          subtitle={subtitle}
          image={headline_image}
        />
      }
      {children}
    </section>
  );
};

HomepageLayoutSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.string,
  headline_image: PropTypes.string,
  children: PropTypes.object.isRequired,
};
