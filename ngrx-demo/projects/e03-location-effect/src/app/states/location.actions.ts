import { createAction, createReducer, on, props } from "@ngrx/store";
import { Township } from "./location.model";

export const actionLoad = createAction('[Townships] load')
export const actionLoadSuccess = createAction('[Townships] load Success', props<any>())
export const addTarget = createAction('[Targets] add', props<{ id: number }>())
export const removeTarget = createAction('[Targets] remove', props<{ id: number }>())

const initialTownship: ReadonlyArray<Township> = []

export function reduceTownships(state: any, action: any) {
    return createReducer(initialTownship,
        on(actionLoadSuccess, (state, result) => [...result.payload])
    )(state, action)
}

const initialTarget: ReadonlyArray<number> = []

export function reduceTargets(state: any, action: any) {
    return createReducer(initialTarget,
        on(addTarget, (state, township) => [...state, township.id]),
        on(removeTarget, (state, township) => state.filter(a => a != township.id)),
    )(state, action)
}
