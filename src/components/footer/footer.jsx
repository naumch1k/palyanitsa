import { NavLink } from 'react-router-dom';
import { Menu } from '../ui/menu';
import styles from './footer.module.scss';
import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../shared/constants/footer-social-links';

export const Footer = () => {
  return (
    <>
      <div className={styles.columns}>
        <div className={styles.logo}></div>
        {/* <div className={styles.navigation}>
          <h3 className={styles.heading}>Website</h3>
          <Menu type="footer-navigation">
            {mainNavigationItems.map((item, i) => (
              <Menu.Item key={i}>
                <NavLink
                  className={styles.link}
                  data-text={item.text}
                  to={item.href}
                >
                  {item.text}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div> */}
        <div className={styles.socials}>
          <h3 className={styles.heading}>Socials</h3>
          <Menu type="overlay-footnote-links">
            {footerSocialLinks.map((link, i) => (
              <Menu.Item key={i}>
                <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
                  {link.id}
                </a>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.heading}>Get in Touch</h3>
          <Menu type="overlay-footnote-links">
            <Menu.Item>
              <a className={styles.link} href="mailto:hello@pgds.xyz">
                hello@pgds.xyz
              </a>
            </Menu.Item>
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
