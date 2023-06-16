import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';

// import styles from './homepage-call-to-action.module.scss';

export const HomepageCallToAction = ({
  tag,
  title,
  subtitle,
  headline_image,
}) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
  </>
);

HomepageCallToAction.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
};
