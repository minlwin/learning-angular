import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as Action from './app.actions';
import { District, State, Township } from "./app.model";

@Injectable()
export class LocationEffects {

    constructor(private http: HttpClient, private actions$: Actions) { }

    loadStateEffect$ = createEffect(() => this.actions$.pipe(
        ofType(Action.loadState),
        mergeMap(action => this.http.get<State[]>('assets/states.json').pipe(
            map(list => ({
                type: Action.loadStateSuccess.type,
                payload: list
            }))
        ))
    ))

    loadDistrictEffect$ = createEffect(() => this.actions$.pipe(
        ofType(Action.loadDistrict),
        mergeMap(action => this.http.get<District[]>('assets/districts.json').pipe(
            map(list => ({
                type: Action.loadDistrictSuccess.type,
                payload: list
            }))
        ))
    ))

    loadTownshipEffect$ = createEffect(() => this.actions$.pipe(
        ofType(Action.loadTownship),
        mergeMap(action => this.http.get<Township[]>('assets/townships.json').pipe(
            map(list => ({
                type: Action.loadTownshipSuccess.type,
                payload: list
            }))
        ))
    ))
}