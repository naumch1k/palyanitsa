import { HomepageLayoutHeadline } from './headline';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.Headline = HomepageLayoutHeadline;
