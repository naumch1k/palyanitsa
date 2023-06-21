import PropTypes from 'prop-types';
import styles from './homepage-call-to-action.module.scss';
import { SectionHeadline } from '../section-headline';
import { ContactForm } from '../contact-form';
import { GeneralInfoList } from '../general-info-list';

export const HomepageCallToAction = ({
  tag,
  title,
  subtitle,
  headline_image,
  general_info,
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
      <div className={styles.generalInfoWrapper}>
        <GeneralInfoList
          data={general_info}
        />
      </div>
    </div>
  </>
);

HomepageCallToAction.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
  general_info: PropTypes.array,
};
