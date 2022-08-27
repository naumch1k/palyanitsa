import PropTypes from 'prop-types';

import { Page } from '../page';
import { Footer } from '../footer';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object
};
