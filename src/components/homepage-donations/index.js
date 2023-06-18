import PropTypes from 'prop-types';
import { SectionHeadline } from '../section-headline';
import { DonationsList } from '../donations-list';
import { DonationsCard } from '../donations-card';

export const HomepageDonations = ({
  tag,
  title,
  subtitle,
  headline_image,
  donation_platforms,
}) => {
  return (
    <>
      <SectionHeadline
        tag={tag}
        title={title}
        subtitle={subtitle}
        image={headline_image}
      />
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
    </>
  );
};

HomepageDonations.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
  donation_platforms: PropTypes.array,
};
