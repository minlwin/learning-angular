import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { TownshipService } from "../services/township.service";
import * as LocationActions from '../states/location.actions';

@Injectable()
export class TownshipsEffects {

    constructor(private service: TownshipService, private actions$: Actions) { }

    loadTownships$ = createEffect(() => this.actions$.pipe(
        tap(data => console.log(data)),
        ofType(LocationActions.TOWNSHIP_LOAD),
        mergeMap(params => this.service.search(params).pipe(
            map(result => ({ type: LocationActions.TOWNSHIP_LOAD_SUCCESS.type, payload: result }))
        ))
    ))
}