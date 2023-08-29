import { Page as Component } from './page';
import { PageContent } from './content';
import { PageFooter } from './footer';
import { PageBurgerButton } from './burger-button';
import { PageOverlayMenu } from './overlay-menu';
import { PageDonateButton } from './donate-button';

const Page = Object.assign(Component, {
  Content: PageContent,
  Footer: PageFooter,
  BurgerButton: PageBurgerButton,
  OverlayMenu: PageOverlayMenu,
  DonateButton: PageDonateButton,
});

export default Page;
