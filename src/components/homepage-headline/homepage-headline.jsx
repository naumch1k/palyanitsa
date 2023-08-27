import styles from './homepage-headline.module.scss';

export const HomepageHeadline = () => (
  <h1 className={styles.title}>
    <span className={styles.titleAccent}>Palianytsia</span>
    Foundat<span className={styles.dot}>ı</span>on
  </h1>
);
