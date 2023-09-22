import { useParams, Navigate } from 'react-router-dom';
import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';

import stories from '../stories/mock-data.json';

const Story = () => {
  const { id } = useParams();

  const story = stories.find(story => story.id === id);

  if (!story) return <Navigate to="/page-not-found"/>;

  return (
    <AppLayout donateButton>
      <SEO
        title={`Stories: ${story.heading}`}
        image={story.image_tablet}
      />
      <p>{story.heading}</p>
    </AppLayout>
  );
};

export default Story;
