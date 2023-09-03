import { Logotype } from '../logotype/logotype';
import { Menu } from '../ui/menu';
import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../shared/constants/footer-social-links';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <Logotype className={styles.logotype}/>
      <div className={styles.navigation}>
        <h3 className={styles.heading}>Website</h3>
        <Menu type="footer-navigation">
          {mainNavigationItems.map(item => (
            <Menu.Item
              key={item.href}
              href={item.href}
              text={item.text}
            />
          ))}
        </Menu>
      </div>
      <div className={styles.socials}>
        <h3 className={styles.heading}>Socials</h3>
        <Menu type="footer-links">
          {footerSocialLinks.map(link => (
            <Menu.Item
              key={link.href}
              href={link.href}
              text={link.text}
              target="_blank"
              rel="noreferrer"
            />
          ))}
        </Menu>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.heading}>Get in Touch</h3>
        <Menu type="footer-links">
          <Menu.Item
            href="mailto:hello@pgds.xyz"
            text="hello@pgds.xyz"
          />
        </Menu>
      </div>
      <div className={styles.footnote}>
        <p>@{new Date().getFullYear()} Palianytsia Foundation</p>
        <p className={styles.credits}>Site by{' '}
          <a className={styles.link} href="https://naumchik.me/" target="_blank" rel="noreferrer">
            Irina Naumchik
          </a>
        </p>
      </div>
    </div>
  );
};
