import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Page from '../page';
import { Footer } from '../footer';
import { BurgerButton } from '../ui/burger-button';
import { DonateButton } from '../ui/donate-button';
import { NavigationMenu } from '../navigation-menu';

export const AppLayout = ({ children }) => {
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);

  const toggleOverlayMenu = useCallback(() => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen);
  }, [isOverlayMenuOpen]);

  return (
    <Page>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
      <Page.BurgerButton>
        <BurgerButton
          isOpen={isOverlayMenuOpen}
          onClick={toggleOverlayMenu}
        />
      </Page.BurgerButton>
      <Page.DonateButton>
        <DonateButton/>
      </Page.DonateButton>
      <Page.OverlayMenu isOpen={isOverlayMenuOpen}>
        <NavigationMenu isOpen={isOverlayMenuOpen}/>
      </Page.OverlayMenu>
    </Page>
  );
};

AppLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
