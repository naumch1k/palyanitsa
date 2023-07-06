import PropTypes from 'prop-types';
import { PartnersListItem } from './item';
import styles from './partners-list.module.scss';

const Component = ({ children }) => {

  return (
    <ul className={styles.root}>
      {children}
    </ul>
  );
};

export const PartnersList = Object.assign(Component, {
  Item: PartnersListItem,
});

Component.propTypes = {
  children: PropTypes.node,
};
