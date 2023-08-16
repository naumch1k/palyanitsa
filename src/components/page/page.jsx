import PropTypes from 'prop-types';
import styles from './page.module.scss';

export const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.array
};
