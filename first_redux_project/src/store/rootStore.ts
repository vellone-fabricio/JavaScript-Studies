import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { counterReducer } from './counter/CounterReducer';

const logger = createLogger();

export const rootReducer = combineReducers({ 
  counterReducer
 });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(logger));