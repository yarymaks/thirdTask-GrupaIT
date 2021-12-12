import { createAction } from '@reduxjs/toolkit';

const fetchQuoteRequest = createAction('quotes/fetchContactRequest');
const fetchQuoteSuccess = createAction('quotes/fetchQuoteSuccess');
const fetchQuoteError = createAction('quotes/fetchQuoteError');

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchQuoteRequest, fetchQuoteSuccess, fetchQuoteError };
