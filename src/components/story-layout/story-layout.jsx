import PropTypes from 'prop-types';
import styles from './story-layout.module.scss';

export const StoryLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

StoryLayout.propTypes = {
  children: PropTypes.array
};
