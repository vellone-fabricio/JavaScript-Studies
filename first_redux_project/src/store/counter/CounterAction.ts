import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './models/actions';

export const incrementCount = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCount = () => ({
  type: DECREMENT_COUNTER,
});