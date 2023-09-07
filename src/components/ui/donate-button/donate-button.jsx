import { Link } from 'react-router-dom';
import styles from './donate-button.module.scss';

export const DonateButton = () => {
  return (
    <Link
      className={styles.root}
      to="/donate"
      aria-label="Go to donate page"
    >
      <span>Donate</span>
    </Link>
  );
};
