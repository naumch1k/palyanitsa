import { Page } from '../page';
import { Footer } from '../footer';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Navbar>
      </Page.Navbar>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};
