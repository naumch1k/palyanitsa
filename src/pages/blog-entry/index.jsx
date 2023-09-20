import { useParams, Navigate } from 'react-router-dom';

import blogEntries from '../blog/mock-data.json';

const BlogEntry = () => {
  const { id } = useParams();

  const blogEntry = blogEntries.find(entry => entry.id === id);

  if (!blogEntry) return <Navigate to="/page-not-found"/>;

  return (
    <></>
  );
};

export default BlogEntry;
