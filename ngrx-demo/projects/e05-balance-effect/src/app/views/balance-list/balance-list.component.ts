import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ACTION_DETAILS_RESET, ACTION_DETAILS_SEARCH } from '../../store/states/details/details.action';
import { StoreConfig } from '../../store/store.config';
import { SELECT_DETAILS } from '../../store/store.selectors';

@Component({
  templateUrl: './balance-list.component.html',
  styles: [
  ]
})
export class BalanceListComponent {

  type = ''
  list$ = this.store.select(SELECT_DETAILS).pipe(map(
    list => {
      let total = 0
      return list.map(a => {
        total += a.amount
        return {
          ...a,
          total: total
        }
      })
    }
  ))

  constructor(route: ActivatedRoute, private store: Store<StoreConfig>) {
    route.params.subscribe(params => {
      store.dispatch(ACTION_DETAILS_RESET())
      this.type = params['type']
    })
  }

  search(params: any) {
    this.store.dispatch(ACTION_DETAILS_SEARCH({ payload: params }))
  }

}
