import PropTypes from 'prop-types';
import styles from './general-info-list.module.scss';

export const GeneralInfoList = ({ data }) => {
  return (
    <dl className={styles.root}>
      {data.map((item, i) => (
        <div className={styles.item} key={i}>
          <item.icon className={styles.icon} aria-hidden="true" focusable="false"/>
          <dt className={styles.heading}>{item.heading}</dt>
          <dd className={styles.paragraphs}>
            {item.paragraphs.map((paragraph, i) => (
              <span className={styles.paragraph} key={i}>{paragraph}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
};

GeneralInfoList.propTypes = {
  data: PropTypes.array,
};
