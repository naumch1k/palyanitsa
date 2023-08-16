import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import styles from './page-not-found.module.scss';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBackButtonClick = () => navigate(-1);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Houston! We&nbsp;have&nbsp;a
      </h1>
      <div className={styles.numbers}>
        <span className={styles.number}>4</span>
        <span className={styles.number}>0</span>
        <span className={styles.number}>4</span>
      </div>
      <button className={styles.button} onClick={handleGoBackButtonClick}>
        <div className={styles.arrows}>
          <span className={styles.arrow}>
            <MdOutlineArrowBack/>
          </span>
          <span className={styles.arrow}>
            <MdOutlineArrowBack/>
          </span>
        </div>
        Go back
      </button>
    </div>
  );
};
