import { Component } from '@angular/core';
// importing store module...
import {Store} from '@ngrx/store';
// importing Observable module ...
import {Observable} from 'rxjs/Observable';
// importing Increment , Decrement and Reset  ACTION TYPES ...
import {INCREMENT, DECREMENT, RESET} from './counter';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
}

  increment() {
    this.store.dispatch({type: INCREMENT});
  }
  decrement() {
    this.store.dispatch({type: DECREMENT});
  }
  reset() {
    this.store.dispatch({type: RESET});
  }
}
