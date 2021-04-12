import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ACTION_BALANCE_RESET, ACTION_BALANCE_SEARCH } from '../../store/states/balance/balance.actions';
import { StoreConfig } from '../../store/store.config';
import { SELECT_BALANCES } from '../../store/store.selectors';

@Component({
  templateUrl: './balance-reports.component.html',
  styles: [
  ]
})
export class BalanceReportsComponent {

  list$ = this.store.select(SELECT_BALANCES).pipe(
    map(data => {
      let incomes = 0
      let expenses = 0

      return data.map(a => {
        if (a.type === 'Income') {
          incomes += a.total
        } else {
          expenses += a.total
        }

        return {
          ...a,
          income: a.type === 'Income' ? a.total : 0,
          expense: a.type === 'Expense' ? a.total : 0,
          total: incomes - expenses,
        }
      })
    })
  )

  constructor(private store: Store<StoreConfig>) {
    store.dispatch(ACTION_BALANCE_RESET())
  }

  search(params: any) {
    this.store.dispatch(ACTION_BALANCE_SEARCH({ payload: params }))
  }
}
