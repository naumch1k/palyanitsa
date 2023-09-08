import PropTypes from 'prop-types';
import { PageSubtitle } from '../../page-subtitle';
import styles from './ways-to-help-layout-section.module.scss';

export const WaysToHelpLayoutSection = ({ children, title }) => {
  return (
    <section className={styles.root}>
      <PageSubtitle text={title}/>
      {children}
    </section>
  );
};

WaysToHelpLayoutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
