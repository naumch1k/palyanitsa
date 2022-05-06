import { Page } from '../page';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Navbar/>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer/>
    </Page>
  );
};
