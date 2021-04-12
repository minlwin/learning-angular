import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { BalanceService } from "../../services/balance.service";
import { ACTION_BALANCE_LOAD, ACTION_BALANCE_SEARCH } from "../states/balance/balance.actions";

@Injectable()
export class BalanceEffects {

    constructor(private service: BalanceService, private actions$: Actions) { }

    searchBalance$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_BALANCE_SEARCH),
        mergeMap(action => this.service.search(action.payload || {}).pipe(
            map(result => ({ type: ACTION_BALANCE_LOAD.type, payload: result }))
        ))
    ))
}