import { createContext, useContext } from 'react';

const MenuContext = createContext(undefined);

export const MenuProvider = MenuContext.Provider;

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('The useMenu hook must be used within a MenuProvider');
  }

  return context;
};
