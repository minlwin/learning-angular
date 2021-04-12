import { Balance, BalanceDetails } from "../services/balance.service";
import { Category } from "../services/category.service";
import { reduceBalance } from "./states/balance/balance.reducers";
import { reduceCategory } from "./states/category/category.reducers";
import { reduceDetails } from "./states/details/details.reducers";
import { reduceModel } from "./states/model/model.reducers";

export interface StoreConfig {
    categories: ReadonlyArray<Category>
    balances: ReadonlyArray<Balance>
    balanceDetails: ReadonlyArray<BalanceDetails>
    model: {
        balance: Balance
        details: ReadonlyArray<BalanceDetails>
    }
}

export const APP_STORE = {
    categories: reduceCategory,
    balances: reduceBalance,
    balanceDetails: reduceDetails,
    model: reduceModel
}