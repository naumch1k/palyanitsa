import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import WaysToHelpLayout from '../../components/ways-to-help-layout';
import AccordionList from '../../components/accordion-list';
import { WaysToHelpCard } from '../../components/ways-to-help-card';
import { WaysToHelpMessage } from '../../components/ways-to-help-message/ways-to-help-message';

import donationPlatforms from '../../shared/constants/donation-platforms';
import otherWaysToHelp from '../../shared/constants/other-ways-to-help';

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
            <AccordionList type="ways-to-help">
              {donationPlatforms.map(platform => (
                <AccordionList.Item key={platform.name} heading={`Donate with ${platform.name}`} note={platform.note}>
                  <WaysToHelpCard data={platform}/>
                </AccordionList.Item>
              ))}
            </AccordionList>
          </WaysToHelpLayout.Section>
          <WaysToHelpLayout.Section title="More ways to help">
            <AccordionList type="ways-to-help">
              {otherWaysToHelp.map(item => (
                <AccordionList.Item key={item.name} heading={item.name}>
                  <WaysToHelpCard data={item}/>
                </AccordionList.Item>
              ))}
            </AccordionList>
          </WaysToHelpLayout.Section>
          <WaysToHelpMessage/>
        </WaysToHelpLayout.Content>
      </WaysToHelpLayout>
    </AppLayout>
  );
};

export default Donate;
