import PropTypes from 'prop-types';
import styles from './story-layout-title.module.scss';

export const StoryLayoutTitle = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

StoryLayoutTitle.propTypes = {
  children: PropTypes.object,
};
