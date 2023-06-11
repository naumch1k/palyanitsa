import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';
import { DisciplinesList } from '../disciplines-list';
import { DisciplinesCard } from '../disciplines-card';

export const HomepageDisciplines = ({ tag, title, subtitle, headline_image, disciplines }) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
    <DisciplinesList>
      {disciplines.map((discipline, i) => (
        <DisciplinesList.Item key={i}>
          <DisciplinesCard
            id={discipline.id}
            heading={discipline.heading}
            description={discipline.description}
            icon={discipline.icon}
          />
        </DisciplinesList.Item>
      ))}
    </DisciplinesList>
  </>
);

HomepageDisciplines.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
  disciplines: PropTypes.array,
};
