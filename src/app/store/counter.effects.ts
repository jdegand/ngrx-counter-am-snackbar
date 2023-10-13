import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CounterComponentActions, SnackbarActions } from "./counter.actions";

import { map, tap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CounterEffects {

  displaySnackBar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SnackbarActions.displaySnackBar),
        tap(action => {
          this.snackBar.open(action.description, 'DISMISS', { duration: 2000 })
        })
      ),
    { dispatch: false }
  );

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterComponentActions.increment),
      map(action =>
        SnackbarActions.displaySnackBar({
          description: "Counter incremented by 1"
        })
      )
    )
  );

  decrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterComponentActions.decrement),
      map(action =>
        SnackbarActions.displaySnackBar({
          description: "Counter decremented by 1"
        })
      )
    )
  );

  reset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterComponentActions.reset),
      map(action =>
        SnackbarActions.displaySnackBar({
          description: "Counter reset"
        })
      )
    )
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar) { }
}