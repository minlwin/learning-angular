import { createAction, props } from "@ngrx/store"

export const ACTION_DETAILS_SEARCH = createAction('[Details] search', props<any>())
export const ACTION_DETAILS_LOAD = createAction('[Details] load', props<any>())
export const ACTION_DETAILS_RESET = createAction('[Details] reset')