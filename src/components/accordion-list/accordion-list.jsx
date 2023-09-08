import { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { AccordionListProvider } from './accordion-list.context';
import { styles } from './accordion-list.styles';

export const AccordionList = ({ type, children }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  return (
    <ul className={`${styles[type].list}`}>
      <AccordionListProvider value={{ type }}>
        {children.map((child, index) => (
          cloneElement(child, {
            ...child,
            isActive: activeItemIndex === index,
            onSelect: () => setActiveItemIndex(activeItemIndex === index ? null : index),
          })
        )
        )}
      </AccordionListProvider>
    </ul>
  );
};

AccordionList.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
