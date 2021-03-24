export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}

export type CounterActionsType = IncrementAction | DecrementAction;