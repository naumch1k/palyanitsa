import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Menu } from '../ui/menu';
import mainNavigationItems from '../../shared/constants/main-navigation-items';
import footerSocialLinks from '../../shared/constants/footer-social-links';
import styles from './navigation-menu.module.scss';

export const NavigationMenu = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <nav>
        <Menu type="overlay-navigation">
          {mainNavigationItems.map(item => {
            const current = location.pathname === item.href;

            return (
              <Menu.Item
                key={item.href}
                href={item.href}
                text={item.text}
                current={current}
                enterAnimationEnabled={isOpen}
                data-text={item.text}
              />
            );
          })}
        </Menu>
      </nav>
      <div className={styles.footnote}>
        <div>
          <h3 className={styles.footnoteHeading}>Socials</h3>
          <Menu type="overlay-footnote-links">
            {footerSocialLinks.map(link => (
              <Menu.Item
                key={link.href}
                href={link.href}
                text={link.text}
                enterAnimationEnabled={isOpen}
                target="_blank"
                rel="noreferrer"
              />
            ))}
          </Menu>
        </div>
        <div>
          <h3 className={styles.footnoteHeading}>Get in Touch</h3>
          <Menu type="overlay-footnote-links">
            <Menu.Item
              href="mailto:hello@pgds.xyz"
              text="hello@pgds.xyz"
              enterAnimationEnabled={isOpen}
            />
          </Menu>
        </div>
      </div>
    </div>
  );
};

NavigationMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
