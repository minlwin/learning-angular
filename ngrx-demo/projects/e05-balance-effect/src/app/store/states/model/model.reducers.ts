import { createReducer, on } from "@ngrx/store";
import { Balance } from "../../../services/balance.service";
import { BalanceModel } from "../../effects/model.effects";
import { ACTION_MODEL_LOAD_SUCCESS, ACTION_MODEL_RESET, ACTION_MODEL_SAVE_SUCCESS } from "./model.actions";

export function generateBalance(): Balance {
    return {
        id: 0,
        type: '',
        category: '',
        useDate: '',
        total: 0
    }
}

const STATE: BalanceModel = {
    balance: generateBalance(),
    details: [],
}

const REDUCER = createReducer(STATE,

    on(ACTION_MODEL_RESET, _ => ({ balance: generateBalance(), details: [] })),
    on(ACTION_MODEL_SAVE_SUCCESS, (state, result) => ({ ...state, saved: result.payload })),
    on(ACTION_MODEL_LOAD_SUCCESS, (_, result) => result.payload),
)

export function reduceModel(state: any, action: any) {
    return REDUCER(state, action)
}