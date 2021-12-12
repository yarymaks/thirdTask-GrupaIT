import Spinner from '../Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { quotesOperations, quotesSelectors } from '../../redux/quotes';
import RandomQuote from '../RandomQuote';
import styles from './ThirdTaskStyles.module.css';

const ThirdTask = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(quotesSelectors.getLoading);
  const quotes = useSelector(quotesSelectors.getQuotes);
  const isError = useSelector(quotesSelectors.getError);
  useEffect(() => dispatch(quotesOperations.fetchQuotes()), [dispatch]);
  return (
    <>
      <h1>Random quote</h1>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, we have some loading error! :(</p>
      ) : (
        <RandomQuote quotes={quotes} />
      )}
    </>
  );
};
export default ThirdTask;
