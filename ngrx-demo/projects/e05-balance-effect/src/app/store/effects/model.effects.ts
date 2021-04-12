import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { Balance, BalanceDetails, BalanceService } from "../../services/balance.service";
import { ACTION_MODEL_LOAD, ACTION_MODEL_LOAD_SUCCESS, ACTION_MODEL_RESET, ACTION_MODEL_SAVE } from "../states/model/model.actions";

export interface BalanceModel {
    readonly balance: Balance
    readonly details: ReadonlyArray<BalanceDetails>
}

@Injectable()
export class ModelEffects {

    constructor(private service: BalanceService, private actions$: Actions) { }

    saveBalanceModel$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_MODEL_SAVE),
        mergeMap(action => this.saveModel(action.payload).pipe(
            map(_ => ({ type: ACTION_MODEL_RESET.type }))
        ))
    ))

    loadBalanceModel$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_MODEL_LOAD),
        mergeMap(action => this.service.findById(action.id).pipe(
            mergeMap(balance => this.service.getDetails(balance.id).pipe(
                map(details => ({
                    type: ACTION_MODEL_LOAD_SUCCESS.type, payload: {
                        balance: balance,
                        details: details
                    }
                }))
            ))
        ))
    ))

    private saveModel(dto: any) {
        const balance = this.balance(dto)
        const list = this.details(dto)
        return this.service.save(balance).pipe(
            mergeMap(result =>
                balance.id ? this.service.updateDetails(result.id, list) :
                    this.service.createDetails(result.id, list)
            )
        )
    }

    private balance(dto: any): Balance {
        return dto.balance as Balance
    }

    private details(dto: any): BalanceDetails[] {
        return dto.details as BalanceDetails[]
    }
}