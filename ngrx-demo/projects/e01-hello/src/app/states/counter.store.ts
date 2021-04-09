import { createAction, createReducer, on } from "@ngrx/store";

export interface CounterState {
    count: number
}

export const incrementAction = createAction('[Counter] increment')
export const decrementAction = createAction('[Counter] decrement')
export const resetAction = createAction('[Counter] reset')

export function reduceCounterState(state: any, action: any) {
    return createReducer(0,
        on(incrementAction, state => state + 1),
        on(decrementAction, state => state - 1),
        on(resetAction, _ => 0)
    )(state, action)
}