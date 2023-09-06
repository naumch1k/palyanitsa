import { ArrowLink } from '../ui/arrow-link';
import styles from './page-not-found.module.scss';

export const PageNotFound = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Houston! We&nbsp;have&nbsp;a
      </h1>
      <div className={styles.numbers}>
        <span className={styles.number}>4</span>
        <span className={styles.number}>0</span>
        <span className={styles.number}>4</span>
      </div>
      <ArrowLink
        className={styles.link}
        isInternalLink
        href="/"
        linkText="Go to main page"
        direction="left"
      />
    </div>
  );
};
