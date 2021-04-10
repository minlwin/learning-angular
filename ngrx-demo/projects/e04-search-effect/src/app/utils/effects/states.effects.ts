import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { State, StateService } from "../services/state.service";
import * as LocationActions from '../states/location.actions';

@Injectable()
export class StatesEffects {

    constructor(private service: StateService, private actions$: Actions) { }

    loadRegionsEffects$ = createEffect(() => this.actions$.pipe(
        ofType(LocationActions.REGION_LOAD),
        mergeMap(() => this.service.search({}).pipe(
            map(result => ({ type: LocationActions.REGION_LOAD_SUCCESS.type, payload: this.getRegions(result) }))
        ))
    ))

    loadStatesEffects$ = createEffect(() => this.actions$.pipe(
        ofType(LocationActions.STATE_LOAD),
        mergeMap(params => this.service.search(params).pipe(
            map(result => ({ type: LocationActions.STATE_LOAD_SUCCESS.type, payload: result }))
        ))
    ))

    private getRegions(list: State[]): string[] {
        return list.map(a => a.region).filter((v, i, array) => array.findIndex(a => a === v) === i)
    }
}