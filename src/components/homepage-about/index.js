import PropTypes from 'prop-types';

import styles from './homepage-about.module.scss';

export const HomepageAbout = ({ title, items }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {items.map((item, idx) =>
        <li
          className={styles.listItem}
          key={idx}
        >
          <div className={styles.icon}>
            <img
              src={item.icon}
              alt={`An icon for ${item.heading}`}
            />
          </div>
          <h3 className={styles.heading}>{item.heading}</h3>
          <p className={styles.text}>{item.text}</p>
        </li>
      )}
    </ul>
  </>
);

HomepageAbout.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
