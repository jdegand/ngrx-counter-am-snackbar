import { createActionGroup, props, emptyProps } from "@ngrx/store";

export const CounterComponentActions = createActionGroup({
  source: 'Counter Component',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps()
  }
})

export const SnackbarActions = createActionGroup({
  source: 'Snackbar',
  events: {
    displaySnackBar: props<{ description: string }>(),
  }
})
