import PropTypes from 'prop-types';
import DisciplinesList from '../disciplines-list';
import { DisciplinesCard } from '../disciplines-card';

export const HomepageDisciplines = ({ disciplines }) => {
  return (
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
  );
};

HomepageDisciplines.propTypes = {
  disciplines: PropTypes.array.isRequired,
};
