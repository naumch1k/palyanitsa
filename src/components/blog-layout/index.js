import { BlogLayout as Component } from './blog-layout';
import { BlogLayoutTitle } from './title';

const BlogLayout = Object.assign(Component, {
  Title: BlogLayoutTitle,
});

export default BlogLayout;
