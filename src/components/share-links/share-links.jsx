import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getShareUrls } from '../../shared/constants/share-urls';
import { addBaseUrlToPath } from '../../shared/helpers/url';
import styles from './share-links.module.scss';

export const ShareLinks = ({ className }) => {
  const location = useLocation();
  const path = location.pathname;
  const url = addBaseUrlToPath(path);

  return (
    <div className={`${className} ${styles.root}`}>
      <p className={styles.text}>Share on social media:</p>
      <ul className={styles.list}>
        {getShareUrls(url).map(item => (
          <li className={styles.listItem} key={item.platform}>
            <a
              className={styles.link}
              href={item.href}
              aria-label={`Share on ${item.platform}`}
              target="_blank"
              rel="noreferrer"
            >
              <item.icon/>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ShareLinks.propTypes = {
  className: PropTypes.string,
};
