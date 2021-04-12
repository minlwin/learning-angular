import { createReducer, on } from "@ngrx/store";
import { Category } from "../../../services/category.service";
import { ACTION_CATEGORY_LOAD, ACTION_CATEGORY_RESET } from "./category.actions";

const INIT_STSTE: ReadonlyArray<Category> = []

const REDUCER = createReducer(INIT_STSTE,

    on(ACTION_CATEGORY_LOAD,
        (_, result) => result.payload),

    on(ACTION_CATEGORY_RESET, _ => []),
)

export function reduceCategory(state: any, action: any) {
    return REDUCER(state, action)
}