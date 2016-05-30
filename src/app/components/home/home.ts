import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../reducers/counter.reducer';

interface AppState {
  counter: number;
}

@Component({
  selector: 'my-app',
  template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class MyApp {
  counter: Observable<{}>;

  constructor(public store: Store<AppState>){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
