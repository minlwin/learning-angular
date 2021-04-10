import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { DistrictService } from "../services/district.service";
import * as LocationsActions from '../states/location.actions';

@Injectable()
export class DistrictsEffects {

    constructor(private service: DistrictService, private actions$: Actions) { }

    loadDistricts$ = createEffect(() => this.actions$.pipe(
        ofType(LocationsActions.DISTRICT_LOAD),
        mergeMap(params => this.service.search(params).pipe(
            map(result => ({ type: LocationsActions.DISTRICT_LOAD_SUCCESS.type, payload: result }))
        ))
    ))
}