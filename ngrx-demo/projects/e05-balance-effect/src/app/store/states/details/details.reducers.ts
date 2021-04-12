import { createReducer, on } from "@ngrx/store"
import { BalanceDetails } from "../../../services/balance.service"
import { ACTION_DETAILS_LOAD, ACTION_DETAILS_RESET } from "./details.action"

const INIT_STSTE: ReadonlyArray<BalanceDetails> = []

const REDUCER = createReducer(INIT_STSTE,

    on(ACTION_DETAILS_LOAD,
        (_, result) => result.payload),

    on(ACTION_DETAILS_RESET, _ => []),
)

export function reduceDetails(state: any, action: any) {
    return REDUCER(state, action)
}