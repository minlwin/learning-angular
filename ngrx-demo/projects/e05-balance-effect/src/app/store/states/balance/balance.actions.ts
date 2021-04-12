import { createAction, props } from "@ngrx/store"

export const ACTION_BALANCE_SEARCH = createAction('[Balance] search', props<any>())
export const ACTION_BALANCE_LOAD = createAction('[Balance] load', props<any>())
export const ACTION_BALANCE_RESET = createAction('[Balance] reset')