import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import defaultMetaSettings from '../../shared/constants/default-meta-settings';

export const SEO = ({
  title,
  description = defaultMetaSettings.description,
  image = defaultMetaSettings.image,
}) => {
  return (
    <Helmet>
      <title>{`${title} - ${defaultMetaSettings.title}`}</title>
      <meta name="description" content={description}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="640"/>
      <meta property="og:image:height" content="360"/>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};
