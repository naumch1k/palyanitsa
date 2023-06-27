import PropTypes from 'prop-types';
import { Page } from '../page';
import { Footer } from '../footer';
import { DonateButton } from '../ui/donate-button';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Header/>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
      <Page.DonateButton>
        <DonateButton/>
      </Page.DonateButton>
    </Page>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object
};
