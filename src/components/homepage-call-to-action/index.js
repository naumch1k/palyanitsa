import PropTypes from 'prop-types';
import styles from './homepage-call-to-action.module.scss';
import { SectionHeadline } from '../section-headline';
import { ContactForm } from '../contact-form';

export const HomepageCallToAction = ({
  tag,
  title,
  subtitle,
  headline_image,
}) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
    <div className={styles.content}>
      <div className={styles.formWrapper}>
        <ContactForm/>
      </div>
      <div className={styles.right}></div>
    </div>
  </>
);

HomepageCallToAction.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
};
