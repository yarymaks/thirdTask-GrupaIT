import axios from 'axios';
import actions from './quotes-actions';

axios.defaults.baseURL = 'https://gist.githubusercontent.com/';

const { fetchQuoteRequest, fetchQuoteSuccess, fetchQuoteError } = actions;

const fetchQuotes = () => async dispatch => {
  dispatch(fetchQuoteRequest());
  try {
    const { data } = await axios.get(
      'natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
    );
    dispatch(fetchQuoteSuccess(data));
  } catch (error) {
    dispatch(fetchQuoteError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchQuotes };
