import PropTypes from 'prop-types';
import styles from './general-info-list.module.scss';

export const GeneralInfoList = ({ data }) => {
  return (
    <ul className={styles.root}>
      {data.map((item, i) => (
        <li className={styles.item} key={i}>
          <item.icon className={styles.icon}/>
          <dt className={styles.heading}>{item.heading}</dt>
          <dd className={styles.paragraphs}>
            {item.paragraphs.map((paragraph, i) => (
              <span className={styles.paragraph} key={i}>{paragraph}</span>
            ))}
          </dd>
        </li>
      ))}
    </ul>
  );
};

GeneralInfoList.propTypes = {
  data: PropTypes.array,
};
