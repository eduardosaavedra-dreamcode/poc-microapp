import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from '../Redux/contador.actions';
@Component({
  selector: 'dev-redux-page',
  templateUrl: './redux-page.component.html',
  styleUrls: ['./redux-page.component.css']
})
export class ReduxPageComponent implements OnInit {
  count$ : Observable<number>;

  constructor(private store: Store<{ count: number}>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select('count')
    );
  }

  increment(){
    this.store.dispatch(action.inc());
  }

  decrement(){
    this.store.dispatch(action.dec());
  }

  random(){
    this.store.dispatch(action.random());
  }

  saltar(n: number){
    this.store.dispatch(action.saltar({ num: n}));
  }


}
