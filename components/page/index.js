import { PageNavbar } from './navbar';
import { PageContent } from './content';
import { PageFooter } from './footer';

export const Page = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Page.Navbar = PageNavbar;
Page.Content = PageContent;
Page.Footer = PageFooter;
