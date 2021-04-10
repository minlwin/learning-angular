import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs/operators';
import { TownshipService } from "../services/township.service";
import { actionLoad, actionLoadSuccess } from "./location.actions";

@Injectable()
export class TownshipsEffects {

    constructor(private service: TownshipService, private actions$: Actions) { }

    loadTownships$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actionLoad),
            mergeMap(() => this.service.load().pipe(
                map(result => ({ type: actionLoadSuccess.type, payload: result }))
            ))
        )
    )
}