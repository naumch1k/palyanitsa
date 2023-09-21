import { BlogEntryLayout as Component } from './blog-entry-layout';
import { BlogEntryLayoutHeadline } from './headline';
import { BlogEntryLayoutContent } from './content';

const BlogEntryLayout = Object.assign(Component, {
  Headline: BlogEntryLayoutHeadline,
  Content: BlogEntryLayoutContent,
});

export default BlogEntryLayout;
