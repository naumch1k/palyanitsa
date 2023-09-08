import { createContext, useContext } from 'react';

const AccordionListContext = createContext(undefined);

export const AccordionListProvider = AccordionListContext.Provider;

export const useAccordionList = () => {
  const context = useContext(AccordionListContext);

  if (context === undefined) {
    throw new Error('The useAccordionList hook must be used within a AccordionListProvider');
  }

  return context;
};
