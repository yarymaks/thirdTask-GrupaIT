import { useState, useEffect } from 'react';
import styles from './RandomQuoteStyles.module.css';

const initial = [{ quote: '', author: '' }];

const RandomQuote = ({ quotes }) => {
  const [quotesState, setQuotesState] = useState(initial);
  const [indexState, setIndexState] = useState(0);

  useEffect(() => {
    const index = getRandomQuote();
    const newQuote = {
      quote: quotes[index].quote,
      author: quotes[index].author,
    };
    setQuotesState([newQuote]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomQuote = () => {
    const min = Math.ceil(0);
    const max = Math.floor(quotes.length);
    const index = Math.floor(Math.random() * (max - min)) + min;
    return index;
  };

  const handleClick = () => {
    const index = getRandomQuote();
    const newQuote = {
      quote: quotes[index].quote,
      author: quotes[index].author,
    };
    setQuotesState([...quotesState, newQuote]);
    setIndexState(quotesState.length);
  };

  const goToPreviousQuote = () => {
    return indexState === 0
      ? alert('This is the first quote')
      : setIndexState(indexState - 1);
  };

  const goToNextQuote = () => {
    quotesState.length === indexState + 1
      ? alert('This is the last quote')
      : setIndexState(indexState + 1);
  };

  return (
    <>
      <div className={styles.quoteWrapper}>
        <blockquote className={styles.text}>
          <div className={styles.textContainer}>
            {quotesState[indexState].quote}
            <div className={styles.author}>
              – {quotesState[indexState].author}
            </div>
          </div>
        </blockquote>
      </div>

      <div className={styles.buttons}>
        <div>
          <button className={styles.newQuote} onClick={handleClick}>
            New quote
          </button>
        </div>
        <button className={styles.pagination} onClick={goToPreviousQuote}>
          {`Previous quote`}
        </button>
        <button className={styles.pagination} onClick={goToNextQuote}>
          {`Next quote`}
        </button>
      </div>
    </>
  );
};

export default RandomQuote;
