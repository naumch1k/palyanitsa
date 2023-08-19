import PropTypes from 'prop-types';
import styles from './homepage-partners.module.scss';
import PartnersList from '../partners-list';

export const HomepagePartners = ({ partners }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Our partners</h2>
      <PartnersList>
        {partners.map((partner, i) => (
          <PartnersList.Item
            key={i}
            name={partner.name}
            logo={partner.logo}
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
