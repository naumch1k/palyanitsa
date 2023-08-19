import styles from './donate-button.module.scss';

export const DonateButton = () => {
  const handleClick = () => {
    const element = document.querySelector('#donations-anchor');

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <button className={styles.root} onClick={handleClick}>
      <span>Donate</span>
    </button>
  );
};
