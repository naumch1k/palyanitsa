import { NavLink } from 'react-router-dom';
import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../utils/footer-social-links';
import styles from './navigation-menu.module.scss';

export const NavigationMenu = () => {
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.navList}>
          {mainNavigationItems.map((item, i) => (
            <li className={styles.navListItem} key={i}>
              <NavLink
                className={({ isActive }) => `${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`}
                data-text={item.text}
                to={item.href}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footnote}>
        <div>
          <h3 className={styles.footnoteHeading}>Follow Us</h3>
          <ul className={styles.footnoteLinks}>
            {footerSocialLinks.map(link => (
              <li key={link.id}>
                <a className={styles.footnoteLink} href={link.href} target="_blank" rel="noreferrer">
                  {link.id}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.footnoteHeading}>Get in Touch</h3>
          <a
            className={styles.footnoteLink}
            href="mailto:hello@pgds.xyz"
          >
            hello@pgds.xyz
          </a>
        </div>
      </div>
    </div>
  );
};
