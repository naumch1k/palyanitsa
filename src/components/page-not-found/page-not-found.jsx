import { useNavigate } from 'react-router-dom';
import { ArrowButton } from '../ui/arrow-button';
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
      <ArrowButton
        className={styles.link}
        text="Go back"
        direction="left"
        onClick={handleGoBackButtonClick}
      />
    </div>
  );
};
