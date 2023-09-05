import PropTypes from 'prop-types';
import styles from './quote.module.scss';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export const Quote = ({
  className,
  darkTheme = false,
  text,
  author,
}) => {

  return (
    <blockquote className={`${styles.root} ${className} ${darkTheme ? `${styles.darkTheme}` : ''}`}>
      <div className={styles.text}>
        <ImQuotesLeft className={`${styles.quotesLeft} ${darkTheme ? `${styles.darkTheme}` : ''}`}/>
        {text}
        <ImQuotesRight className={`${styles.quotesRight} ${darkTheme ? `${styles.darkTheme}` : ''}`}/>
      </div>
      {author && <cite className={styles.author}>- {author}</cite>}
    </blockquote>
  );
};

Quote.propTypes = {
  className: PropTypes.string,
  darkTheme: PropTypes.bool,
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
};
