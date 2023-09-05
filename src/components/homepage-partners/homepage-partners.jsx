import PropTypes from 'prop-types';
import styles from './homepage-partners.module.scss';
import PartnersList from '../partners-list';

export const HomepagePartners = ({ partners }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Our friends</h2>
      <PartnersList>
        {partners.map((partner, i) => (
          <PartnersList.Item
            key={i}
            name={partner.name}
            logos={partner.logos}
            link={partner.link}
          />
        ))}
      </PartnersList>
    </div>
  );
};

HomepagePartners.propTypes = {
  partners: PropTypes.array,
};
