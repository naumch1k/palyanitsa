import { Page as Component } from './page';
import { PageHeader } from './header';
import { PageContent } from './content';
import { PageFooter } from './footer';
import { PageBurgerButton } from './burger-button';
import { PageDonateButton } from './donate-button';

const Page = Object.assign(Component, {
  Header: PageHeader,
  Content: PageContent,
  Footer: PageFooter,
  BurgerButton: PageBurgerButton,
  DonateButton: PageDonateButton,
});

export default Page;
