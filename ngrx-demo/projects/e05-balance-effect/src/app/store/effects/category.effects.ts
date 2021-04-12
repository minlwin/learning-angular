import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { CategoryService } from "../../services/category.service";
import { ACTION_CATEGORY_LOAD, ACTION_CATEGORY_SAVE, ACTION_CATEGORY_SEARCH } from "../states/category/category.actions";

@Injectable()
export class CategoryEffects {

    constructor(private service: CategoryService, private actions$: Actions) { }

    searchCategory$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_CATEGORY_SEARCH),
        mergeMap(params => this.service.search(params.payload || {}).pipe(
            map(result => ({ type: ACTION_CATEGORY_LOAD.type, payload: result }))
        ))
    ))

    saveCategory$ = createEffect(() => this.actions$.pipe(
        ofType(ACTION_CATEGORY_SAVE),
        mergeMap(data => this.service.save(data.payload).pipe(
            map(_ => ({ type: ACTION_CATEGORY_SEARCH.type }))
        ))
    ))

}