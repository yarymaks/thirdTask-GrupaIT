const getLoading = state => state.quotes.loading;
const getError = state => state.quotes.error;
const getQuotes = state => state.quotes.quotes;

// eslint-disable-next-line
export default {
  getLoading,
  getError,
  getQuotes,
};
