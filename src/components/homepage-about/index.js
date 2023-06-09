import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SectionHeadline } from '../section-headline';
import styles from './homepage-about.module.scss';

export const HomepageAbout = ({ tag, title, subtitle, headline_image, principles }) => (
  <>
    <SectionHeadline
      tag={tag}
      title={title}
      subtitle={subtitle}
      image={headline_image}
    />
    <div className={styles.content}>
      <div className={styles.principles}>
        {/* TODO: refactor into a separate component */}
        <Tabs
          className={styles.tabs}
          selectedTabClassName={styles.selected}
        >
          <TabList className={styles.tabList}>
            {principles.map((principle, i) => (
              <Tab key={i} className={styles.tab}>{principle.heading}</Tab>
            ))}
          </TabList>
          {principles.map((principle, i) => (
            <TabPanel
              key={i}
              className={styles.tabPanel}
            >
              {principle.paragraphs.map((paragraph, i) => (
                <p key={i} className={styles.tabPanelParagraph}>
                  {paragraph}
                </p>
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>
      <div className={styles.right}></div>
    </div>
  </>

);

HomepageAbout.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headline_image: PropTypes.string,
  principles: PropTypes.array,
};
