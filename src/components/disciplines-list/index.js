import PropTypes from 'prop-types';
import { DisciplinesListItem } from './item';
import styles from './disciplines-list.module.scss';

const Component = ({ children }) => {

  return (
    <div className={styles.container}>
      <ul className={styles.root}>
        {children}
      </ul>
    </div>
  );
};

export const DisciplinesList = Object.assign(Component, {
  Item: DisciplinesListItem,
});

Component.propTypes = {
  children: PropTypes.node,
};
