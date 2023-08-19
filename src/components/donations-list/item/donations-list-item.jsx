import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import styles from './donations-list-item.module.scss';

export const DonationsListItem = ({
  defaultExpanded = false,
  collapsedHeight,
  title,
  children,
}) => {

  const config = {
    defaultExpanded: defaultExpanded || false,
    collapsedHeight: collapsedHeight || 0
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <li className={styles.root}>
      <h4
        className={`${styles.header} ${isExpanded ? styles.isExpanded : ''}`}
        {...getToggleProps()}
      >
        <span>
          {isExpanded
            ? <span className={styles.plusMinusIcon}>-</span>
            : <span className={styles.plusMinusIcon}>+</span>
          }
          {title}
        </span>
        {isExpanded
          ? <MdOutlineKeyboardArrowDown className={`${styles.arrowIcon} ${isExpanded ? styles.isExpanded : ''}`}/>
          : <MdOutlineKeyboardArrowRight className={`${styles.arrowIcon} ${isExpanded ? styles.isExpanded : ''}`}/>
        }
      </h4>
      <div {...getCollapseProps()}>
        <div>
          {children}
        </div>
      </div>
    </li>
  );
};

DonationsListItem.propTypes = {
  defaultExpanded: PropTypes.bool,
  collapsedHeight: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};
