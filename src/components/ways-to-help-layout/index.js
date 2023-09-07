import { WaysToHelpLayout as Component } from './ways-to-help-layout';
import { WaysToHelpLayoutTitle } from './title';
import { WaysToHelpLayoutContent } from './content';
import { WaysToHelpLayoutSection } from './section';

const WaysToHelpLayout = Object.assign(Component, {
  Title: WaysToHelpLayoutTitle,
  Content: WaysToHelpLayoutContent,
  Section: WaysToHelpLayoutSection,
});

export default WaysToHelpLayout;
