import styles from './homepage-headline.module.scss';

export const HomepageHeadline = () => (
  <>
    <h1 className={styles.title}>
      <span className={styles.titleAccent}>Palyanitsa</span>
      Game
      Dev
      Studio<span className={styles.dot}/>
    </h1>
  </>
);
