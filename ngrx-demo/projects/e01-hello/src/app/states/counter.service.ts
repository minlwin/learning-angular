import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CounterState, decrementAction, incrementAction, resetAction } from "./counter.store";

@Injectable({ providedIn: 'root' })
export class CounterService {

    constructor(private store: Store<CounterState>) { }

    increase() {
        this.store.dispatch(incrementAction())
    }

    decrease() {
        this.store.dispatch(decrementAction())
    }

    reset() {
        this.store.dispatch(resetAction())
    }

    get count$(): Observable<number> {
        return this.store.select('count')
    }
}