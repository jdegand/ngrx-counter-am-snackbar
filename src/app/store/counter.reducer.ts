import { createReducer, on } from '@ngrx/store';

import { CounterComponentActions, SnackbarActions } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(CounterComponentActions.increment, state => state + 1),
  on(CounterComponentActions.decrement, state => state - 1),
  on(CounterComponentActions.reset, state => 0),
  on(SnackbarActions.displaySnackBar, state => state)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
