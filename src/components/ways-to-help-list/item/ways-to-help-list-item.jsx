import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import styles from './ways-to-help-list-item.module.scss';

export const WaysToHelpListItem = ({
  isActive,
  onSelect,
  defaultExpanded = false,
  collapsedHeight,
  heading,
  note,
  children,
}) => {

  const config = {
    defaultExpanded: defaultExpanded || false,
    collapsedHeight: collapsedHeight || 0,
    isExpanded: isActive,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <li className={`${styles.root} ${isActive ? `${styles.isActive}` : ''}`}>
      <header
        className={styles.header}
        {...getToggleProps({
          onClick: onSelect,
        })}
      >
        <div>
          <p className={styles.note}>{note}</p>
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        {isExpanded
          ? <MdOutlineKeyboardArrowDown className={styles.arrowIcon}/>
          : <MdOutlineKeyboardArrowRight className={styles.arrowIcon}/>
        }
      </header>
      <div {...getCollapseProps()}>
        <div>
          {children}
        </div>
      </div>
    </li>
  );
};

WaysToHelpListItem.propTypes = {
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
  defaultExpanded: PropTypes.bool,
  collapsedHeight: PropTypes.number,
  heading: PropTypes.string.isRequired,
  note: PropTypes.string,
  children: PropTypes.node,
};
