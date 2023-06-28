import { useState, useEffect } from 'react';
import styles from './donate-button.module.scss';

export const DonateButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    let typingInterval;

    if (window.innerWidth > 1000) {
      if (isHovered) {
        const text = 'Donate';
        let currentIndex = 0;

        typingInterval = setInterval(() => {
          setButtonText(prevText => {
            if (currentIndex < text.length) {
              return prevText + text[currentIndex];
            } else {
              return prevText;
            }
          });

          currentIndex++;

          if (currentIndex > text.length) {
            clearInterval(typingInterval);
          }
        }, 120);
      } else {
        setButtonText('D');
      }
    } else {
      setButtonText('D');
    }

    return () => clearInterval(typingInterval);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    const element = document.querySelector('#donations-anchor');

    if (element) element.scrollIntoViewIfNeeded({ behavior: 'smooth' });
  };

  return (
    <button
      className={styles.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};
