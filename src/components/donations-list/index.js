import PropTypes from 'prop-types';
import { DonationsListItem } from './item';
import styles from './donations-list.module.scss';

const Component = ({ children }) => {

  return (
    <div className={styles.container}>
      <ul className={styles.root}>
        {children}
      </ul>
    </div>
  );
};

export const DonationsList = Object.assign(Component, {
  Item: DonationsListItem,
});

Component.propTypes = {
  children: PropTypes.node,
};
