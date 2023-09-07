import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import WaysToHelpLayout from '../../components/ways-to-help-layout';
import WaysToHelpList from '../../components/ways-to-help-list';
import { WaysToHelpCard } from '../../components/ways-to-help-card';
import { WaysToHelpMessage } from '../../components/ways-to-help-message/ways-to-help-message';

import { donationsData } from '../home/assets/homepage-donations/mock-data';

const Donate = () => {
  return (
    <AppLayout>
      <SEO title="Ways to Help"/>
      <WaysToHelpLayout>
        <WaysToHelpLayout.Title>
          <PageTitle text="Ways To Help"/>
        </WaysToHelpLayout.Title>
        <WaysToHelpLayout.Content>
          <WaysToHelpLayout.Section title="Support financially">
            <WaysToHelpList>
              {donationsData.donation_platforms.map(platform => (
                <WaysToHelpList.Item key={platform.name} heading={`Donate with ${platform.name}`} note={platform.note}>
                  <WaysToHelpCard data={platform}/>
                </WaysToHelpList.Item>
              ))}
            </WaysToHelpList>
          </WaysToHelpLayout.Section>
          <WaysToHelpLayout.Section title="More ways to help">
            <WaysToHelpList>
              {donationsData.other.map(item => (
                <WaysToHelpList.Item key={item.name} heading={item.name}>
                  <WaysToHelpCard data={item}/>
                </WaysToHelpList.Item>
              ))}
            </WaysToHelpList>
          </WaysToHelpLayout.Section>
          <WaysToHelpMessage/>
        </WaysToHelpLayout.Content>
      </WaysToHelpLayout>
    </AppLayout>
  );
};

export default Donate;
