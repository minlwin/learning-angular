import { createAction, props } from "@ngrx/store";

export const CLEAR_ALL = createAction('[Resource] clear all')
export const CLEAR_RESULTS = createAction('[Resource] clear results')

export const REGION_LOAD = createAction('[Region] load')
export const REGION_LOAD_SUCCESS = createAction('[Region] load success', props<any>())

export const STATE_LOAD = createAction('[State] load', props<any>())
export const STATE_LOAD_SUCCESS = createAction('[State] load success', props<any>())

export const DISTRICT_LOAD = createAction('[District] load', props<any>())
export const DISTRICT_LOAD_SUCCESS = createAction('[District] load success', props<any>())

export const TOWNSHIP_LOAD = createAction('[Township] load', props<any>())
export const TOWNSHIP_LOAD_SUCCESS = createAction('[Township] load success', props<any>())
