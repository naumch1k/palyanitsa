import PropTypes from 'prop-types';
import { ContactForm } from '../contact-form';
import { GeneralInfoList } from '../general-info-list';
import styles from './homepage-call-to-action.module.scss';

export const HomepageCallToAction = ({ general_info }) => (
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
);

HomepageCallToAction.propTypes = {
  general_info: PropTypes.array,
};
