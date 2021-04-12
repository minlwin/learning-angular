import { createReducer, on } from "@ngrx/store"
import { Balance } from "../../../services/balance.service"
import { ACTION_BALANCE_LOAD, ACTION_BALANCE_RESET } from "./balance.actions"

const INIT_STSTE: ReadonlyArray<Balance> = []

const REDUCER = createReducer(INIT_STSTE,

    on(ACTION_BALANCE_LOAD,
        (_, result) => result.payload),

    on(ACTION_BALANCE_RESET, _ => []),
)

export function reduceBalance(state: any, action: any) {
    return REDUCER(state, action)
}
