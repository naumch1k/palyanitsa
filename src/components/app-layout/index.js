import PropTypes from 'prop-types';

import { Page } from '../page';

export const AppLayout = ({ children }) => {
  return (
    <Page>
      <Page.Content>
        {children}
      </Page.Content>
    </Page>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object
};
