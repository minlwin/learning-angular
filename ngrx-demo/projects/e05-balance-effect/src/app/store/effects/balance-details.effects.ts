import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { BalanceService } from "../../services/balance.service";
import { ACTION_DETAILS_LOAD, ACTION_DETAILS_SEARCH } from "../states/details/details.action";

@Injectable()
export class BalanceDetailsEffects {

    constructor(private service: BalanceService, private actions$: Actions) { }

    searchDetails$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_DETAILS_SEARCH),
        mergeMap(action => this.service.searchDetails(action.payload || {}).pipe(
            map(result => ({ type: ACTION_DETAILS_LOAD.type, payload: result }))
        ))
    ))
}