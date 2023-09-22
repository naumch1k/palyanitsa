import { StoryLayout as Component } from './story-layout';
import { StoryLayoutTitle } from './title';
import { StoryLayoutContent } from './content/story-layout-content';

const StoryLayout = Object.assign(Component, {
  Title: StoryLayoutTitle,
  Content: StoryLayoutContent,
});

export default StoryLayout;
