import PropTypes from 'prop-types';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './arrow-button.module.scss';

export const ArrowButton = ({
  offset = 0,
  direction,
  onClick,
}) => {
  const style = { [direction]: `-${offset}px` };

  return (
    <button
      className={styles.root}
      type="button"
      style={style}
      onClick={onClick}
    >
      {direction === 'right'
        ? <SlArrowRight className={styles.icon}/>
        : <SlArrowLeft className={styles.icon}/>
      }
    </button>
  );
};

ArrowButton.propTypes = {
  offset: PropTypes.number,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};
