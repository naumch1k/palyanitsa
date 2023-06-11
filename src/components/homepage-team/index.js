import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';
import { ImageGallery } from '../image-gallery';
import styles from './homepage-team.module.scss';

export const HomepageTeam = ({
  tag,
  title,
  subtitle,
  headline_image,
  team,
}) => {
  return (
    <>
      <SectionHeadline
        tag={tag}
        title={title}
        subtitle={subtitle}
        image={headline_image}
      />
      <ImageGallery>
        {team.map((teamMember, i) => (
          <li key={i} className={styles.imageWrapper}>
            <img className={styles.image} src={teamMember.image}/>
          </li>
        ))}
      </ImageGallery>
    </>
  );
};

HomepageTeam.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  headline_image: PropTypes.string.isRequired,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
