import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';

export const HomepageTeam = ({ tag, title, subtitle, headline_image }) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
  </>
);

HomepageTeam.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
};
