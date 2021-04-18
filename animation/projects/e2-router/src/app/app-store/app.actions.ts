import { createAction, props } from "@ngrx/store";
import { District, SearchModel, State, Township } from "./app.model";

export const loadState = createAction('[Domain State] load')
export const loadStateSuccess = createAction('[Domain State] load success', props<{ payload: State[] }>())

export const loadDistrict = createAction('[Domain District] load')
export const loadDistrictSuccess = createAction('[Domain District] load success', props<{ payload: District[] }>())

export const loadTownship = createAction('[Domain Township] load')
export const loadTownshipSuccess = createAction('[Domain Township] load success', props<{ payload: Township[] }>())


export const addRegionFilter = createAction('[Filter] set region', props<{ filter: string }>())
export const addStateFilter = createAction('[Filter] set state', props<{ filter: string }>())
export const addDistrictFilter = createAction('[Filter] set district', props<{ filter: string }>())

export const clearSearchFilter = createAction('[Search Filter] clear')
export const search = createAction('[Search] search', props<{ filter: SearchModel }>())
