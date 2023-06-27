import PropTypes from 'prop-types';
import { DonationsListItem } from './item';
import styles from './donations-list.module.scss';

const Component = ({ children }) => {

  return (
    <div id="donations-anchor" className={styles.container}>
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
