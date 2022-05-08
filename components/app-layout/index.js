import { Page } from '../page';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { Logotype } from '../logotype';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Navbar>
        <Navbar>
          <Navbar.Logotype>
            <Logotype
              href="/"
              title="Palyanitsa Game Studio"
            />
          </Navbar.Logotype>
          <Navbar.Actions/>
        </Navbar>
      </Page.Navbar>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer/>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};
