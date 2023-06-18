import { TextLink } from '../ui/text-link';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.copyright}>
        <p className={styles.text}>built by {' '}
          <TextLink
            href="https://naumchik.me/"
            isOutsideLink
          >
            Irina Naumchik
          </TextLink>
        </p>
        <div className={styles.heart}></div>
      </div>

    </div>
  );
};
