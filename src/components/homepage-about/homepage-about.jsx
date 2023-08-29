import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Slider } from '../slider';
import { Quote } from '../quote';
import styles from './homepage-about.module.scss';

export const HomepageAbout = ({ principles, quotes }) => {
  return (
    <div className={styles.content}>
      <div className={styles.primaryContent}>
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
      <div className={styles.accentBox}>
        <Slider
          arrowButtonsOffset={55}
        >
          {quotes.map((quote, i) => (
            <Slider.Item key={i}>
              <Quote
                text={quote.text}
                author={quote.author}
              />
            </Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  );
};

HomepageAbout.propTypes = {
  principles: PropTypes.array.isRequired,
  quotes: PropTypes.array.isRequired,
};
