import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';
import styles from './homepage-about.module.scss';

export const HomepageAbout = ({ tag, title, subtitle, headline_image }) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
    <div className={styles.content}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  </>

);

HomepageAbout.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
};
