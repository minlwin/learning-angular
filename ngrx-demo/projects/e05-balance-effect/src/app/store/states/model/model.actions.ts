import { createAction, props } from "@ngrx/store";

export const ACTION_MODEL_RESET = createAction('[Balance Model] reset')
export const ACTION_MODEL_SAVE = createAction('[Balance Model] save', props<any>())
export const ACTION_MODEL_SAVE_SUCCESS = createAction('[Balance Model] save success', props<any>())

export const ACTION_MODEL_LOAD = createAction('[Balance Model] load', props<{ id: number }>())
export const ACTION_MODEL_LOAD_SUCCESS = createAction('[Balance Model] load success', props<any>())
