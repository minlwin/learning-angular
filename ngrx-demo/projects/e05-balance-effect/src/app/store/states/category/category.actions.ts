import { createAction, props } from "@ngrx/store";
import { Category } from "../../../services/category.service";

export interface CategorySaveDto {
    readonly data: Category
    readonly params: any
}

export const ACTION_CATEGORY_SEARCH = createAction('[Category] search', props<any>())
export const ACTION_CATEGORY_SAVE = createAction('[Category] save', props<any>())
export const ACTION_CATEGORY_LOAD = createAction('[Category] load', props<any>())
export const ACTION_CATEGORY_RESET = createAction('[Category] reset')