import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu } from '../ui/menu';
import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../shared/constants/footer-social-links';
import styles from './navigation-menu.module.scss';

export const NavigationMenu = ({ isOpen }) => {
  return (
    <div className={styles.root}>
      <nav>
        <Menu type="overlay-navigation">
          {mainNavigationItems.map((item, i) => (
            <Menu.Item key={i} enterAnimationEnabled={isOpen}>
              <NavLink
                className={({ isActive }) => `${styles.navLink} ${isActive ? `${styles.isActive}` : ''}`}
                data-text={item.text}
                to={item.href}
              >
                {item.text}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
      <div className={styles.footnote}>
        <div>
          <h3 className={styles.footnoteHeading}>Socials</h3>
          <Menu type="overlay-footnote-links">
            {footerSocialLinks.map((link, i) => (
              <Menu.Item key={i} enterAnimationEnabled={isOpen}>
                <a className={styles.footnoteLink} href={link.href} target="_blank" rel="noreferrer">
                  {link.id}
                </a>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div>
          <h3 className={styles.footnoteHeading}>Get in Touch</h3>
          <Menu type="overlay-footnote-links">
            <Menu.Item enterAnimationEnabled={isOpen}>
              <a className={styles.footnoteLink} href="mailto:hello@pgds.xyz">
                hello@pgds.xyz
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

NavigationMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
