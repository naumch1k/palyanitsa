import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Page from '../page';
import { Footer } from '../footer';
import { BurgerButton } from '../ui/burger-button';
import { Button } from '../ui/button/button';
import { NavigationMenu } from '../navigation-menu';

export const AppLayout = ({
  children,
  donateButton,
}) => {
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
      {donateButton && (
        <Page.DonateButton>
          <Button
            isLink
            href="/donate"
            label="Donate"
            aria-label="Go to donate page"
          />
        </Page.DonateButton>
      )}
      <Page.OverlayMenu isOpen={isOverlayMenuOpen}>
        <NavigationMenu isOpen={isOverlayMenuOpen}/>
      </Page.OverlayMenu>
    </Page>
  );
};

AppLayout.propTypes = {
  donateButton: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
