import { HomepageLayout as Component } from './homepage-layout';
import { HomepageLayoutHeadline } from './headline';
import { HomepageLayoutSection } from './section';

const HomepageLayout = Object.assign(Component, {
  Section: HomepageLayoutSection,
  Headline: HomepageLayoutHeadline,
});

export default HomepageLayout;
