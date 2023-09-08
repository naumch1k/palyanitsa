import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { useAccordionList } from '../accordion-list.context';
import { styles } from '../accordion-list.styles';

export const AccordionListItem = ({
  isActive,
  onSelect,
  defaultExpanded,
  collapsedHeight,
  note,
  heading,
  children,
}) => {
  const { type } = useAccordionList();

  const config = {
    defaultExpanded: defaultExpanded || false,
    collapsedHeight: collapsedHeight || 0,
    isExpanded: isActive,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <li className={`${styles[type].item} ${isActive ? `${styles[type].isActive}` : ''}`}>
      <header
        className={styles[type].header}
        {...getToggleProps({
          onClick: onSelect,
        })}
      >
        <div>
          {note && <p className={styles[type].note}>{note}</p>}
          <h3 className={styles[type].heading}>{heading}</h3>
        </div>
        {isExpanded
          ? <MdOutlineKeyboardArrowDown className={styles[type].arrowIcon}/>
          : <MdOutlineKeyboardArrowRight className={styles[type].arrowIcon}/>
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

AccordionListItem.propTypes = {
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
  defaultExpanded: PropTypes.bool,
  collapsedHeight: PropTypes.number,
  note: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
