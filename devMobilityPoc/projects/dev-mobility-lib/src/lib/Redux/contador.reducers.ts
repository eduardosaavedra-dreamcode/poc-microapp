import { createReducer, on } from '@ngrx/store';
import * as states from './contador.actions';

export const initial = 0;

//el _ se usa porque se va a repetir el nombre
const _counterReducer = createReducer(
    initial,
    on(states.inc, state => state + 1),
    on(states.dec, state => state - 1),
    on(states.random, _state => Math.floor(Math.random() * 100)),
    on(states.saltar, (_state, { num })=> num),
);

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}