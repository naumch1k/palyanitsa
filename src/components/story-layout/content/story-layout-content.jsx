import PropTypes from 'prop-types';
import styles from './story-layout-content.module.scss';

export const StoryLayoutContent = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

StoryLayoutContent.propTypes = {
  children: PropTypes.array.isRequired,
};
