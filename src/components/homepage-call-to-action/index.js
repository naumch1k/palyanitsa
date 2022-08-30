import PropTypes from 'prop-types';

import styles from './homepage-call-to-action.module.scss';

export const HomepageCallToAction = ({ title }) => (
  <>
    <div className={styles.content}>
      <h2 className={styles.title}>
        Hey, let&apos;s talk&nbsp;
      </h2>
    </div>
  </>
);

HomepageCallToAction.propTypes = {
  title: PropTypes.string
};
