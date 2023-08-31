import { Menu } from '../ui/menu';
import styles from './footer.module.scss';
// import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../shared/constants/footer-social-links';

export const Footer = () => {
  return (
    <>
      <div className={styles.columns}>
        <div className={styles.logo}></div>
        {/* <div className={styles.navigation}>
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
        </div> */}
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
      </div>
      <div className={styles.footnote}>
        <p className={styles.copyright}>@ {new Date().getFullYear()} Palianytsia Foundation</p>
        <a className={styles.textLink} href="https://naumchik.me/" target="_blank" rel="noreferrer">
          Site by Irina Naumchik
        </a>
      </div>
    </>
  );
};
