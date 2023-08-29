import PropTypes from 'prop-types';
import styles from './quote.module.scss';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export const Quote = ({
  text,
  author,
}) => {

  return (
    <blockquote className={styles.root}>
      <div className={styles.text}>
        <ImQuotesLeft className={styles.quotesLeft}/>
        {text}
        <ImQuotesRight className={styles.quotesRight}/>
      </div>
      <cite className={styles.author}>- {author}</cite>
    </blockquote>
  );
};

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};
