import PropTypes from 'prop-types';
import { DonationsList } from '../donations-list';
import { DonationsCard } from '../donations-card';

export const HomepageDonations = ({ donation_platforms }) => {
  return (
    <DonationsList>
      {donation_platforms.map((platform, i) => (
        <DonationsList.Item key={i} title={`Donate with ${platform.name}`}>
          <DonationsCard
            text={platform.text}
            link={platform.link}
            linkText={platform.linkText}
            qrCode={platform.qrCode}
          />
        </DonationsList.Item>
      ))}
    </DonationsList>
  );
};

HomepageDonations.propTypes = {
  donation_platforms: PropTypes.array,
};
