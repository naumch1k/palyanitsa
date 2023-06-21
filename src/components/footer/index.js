import { TextLink } from '../ui/text-link';
import styles from './footer.module.scss';
import footerSocialLinks from '../../utils/footer-social-links';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.socialLinks}>
        {footerSocialLinks.map(link => (
          <li key={link.id}>
            <a className={styles.socialLink} href={link.href} target="_blank" rel="noreferrer">
              <link.icon/>
            </a>
          </li>
        ))}
      </ul>
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
