import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import HomepageLayout from '../../components/homepage-layout';
import { HomepageHeadline } from '../../components/homepage-headline';
import { HomepageAbout } from '../../components/homepage-about';
import DisciplinesList from '../../components/disciplines-list';
import { DisciplinesCard } from '../../components/disciplines-card';
import { HomepageTeam } from '../../components/homepage-team';
import AccordionList from '../../components/accordion-list';
import { DonationsCard } from '../../components/donations-card';
import { HomepageCallToAction } from '../../components/homepage-call-to-action';
import { HomepagePartners } from '../../components/homepage-partners';

import { aboutData } from './assets/homepage-about/mock-data.js';
import { disciplinesData } from './assets/homepage-disciplines/mock-data';
import { teamData } from './assets/homepage-team/mock-data.js';
import { donationsData } from './assets/homepage-donations/mock-data.js';
import { callToActionData } from './assets/homepage-call-to-action/mock-data';
import { partnersData } from './assets/homepage-partners/mock-data';

import team from './assets/team.json';

const Home = () => {
  return (
    <AppLayout donateButton>
      <SEO title="Home"/>
      <HomepageLayout>
        <HomepageLayout.Headline>
          <HomepageHeadline/>
        </HomepageLayout.Headline>
        <HomepageLayout.Section
          title={aboutData.title}
          subtitle={aboutData.subtitle}
          headlineImages={aboutData.headline_images}
        >
          <HomepageAbout
            principles={aboutData.principles}
            quotes={aboutData.quotes}
          />
        </HomepageLayout.Section>
        <HomepageLayout.Section
          title={disciplinesData.title}
          subtitle={disciplinesData.subtitle}
          headlineImages={disciplinesData.headline_images}
        >
          <DisciplinesList>
            {disciplinesData.disciplines.map(discipline => (
              <DisciplinesList.Item key={discipline.id}>
                <DisciplinesCard
                  id={discipline.id}
                  heading={discipline.heading}
                  description={discipline.description}
                  icon={discipline.icon}
                />
              </DisciplinesList.Item>
            ))}
          </DisciplinesList>
        </HomepageLayout.Section>
        <HomepageLayout.Section>
          <HomepageTeam
            title={teamData.title}
            subtitle={teamData.subtitle}
            headlineImages={teamData.headline_images}
            team={team}
          />
        </HomepageLayout.Section>
        <HomepageLayout.Section
          title={donationsData.title}
          subtitle={donationsData.subtitle}
          headlineImages={donationsData.headline_images}
        >
          <AccordionList type="donate">
            {donationsData.donation_platforms.map(platform => (
              <AccordionList.Item key={platform.name} heading={`Donate with ${platform.name}`}>
                <DonationsCard data={platform}/>
              </AccordionList.Item>
            ))}
          </AccordionList>
        </HomepageLayout.Section>
        <HomepageLayout.Section
          title={callToActionData.title}
          subtitle={callToActionData.subtitle}
          headlineImages={callToActionData.headline_images}
        >
          <HomepageCallToAction general_info={callToActionData.general_info}/>
        </HomepageLayout.Section>
        <HomepageLayout.Section>
          <HomepagePartners partners={partnersData}/>
        </HomepageLayout.Section>
      </HomepageLayout>
    </AppLayout>
  );
};

export default Home;
