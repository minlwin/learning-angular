import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { TownshipService } from "../services/township.service";
import { TOWNSHIP_LOAD, TOWNSHIP_LOAD_SUCCESS } from "../states/location.actions";

@Injectable()
export class TownshipsEffects {

    constructor(private service: TownshipService, private actions$: Actions) { }

    loadDistricts$ = createEffect(() => this.actions$.pipe(
        ofType(TOWNSHIP_LOAD),
        mergeMap(params => this.service.search(params).pipe(
            map(result => ({ type: TOWNSHIP_LOAD_SUCCESS.type, payload: result }))
        ))
    ))
}