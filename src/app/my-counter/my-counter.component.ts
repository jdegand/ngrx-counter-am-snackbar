import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CounterComponentActions } from '../store/counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-my-counter',
    template: `
  <h2>Counter Component</h2>
  <p>Current Count: {{ count$ | async }}</p>
  <button id="decrement" (click)="decrement()">Decrement</button>
  <button id="increment" (click)="increment()">Increment</button>
  <button id="reset" (click)="reset()">Reset</button>
  `,
    standalone: true,
    imports: [AsyncPipe]
})

export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(CounterComponentActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterComponentActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterComponentActions.reset());
  }
}
