import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './quotes-actions';

const { fetchQuoteRequest, fetchQuoteSuccess, fetchQuoteError } = actions;

const quotes = createReducer([], {
  [fetchQuoteSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchQuoteRequest]: () => true,
  [fetchQuoteSuccess]: () => false,
  [fetchQuoteError]: () => false,
});

const error = createReducer(false, {
  [fetchQuoteRequest]: () => false,
  [fetchQuoteSuccess]: () => false,
  [fetchQuoteError]: () => true,
});

export default combineReducers({
  quotes,
  loading,
  error,
});
