import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as Actions from '../../store/states/model/model.actions';
import { StoreConfig } from '../../store/store.config';
import * as Selectors from '../../store/store.selectors';

@Component({
  templateUrl: './balance-details.component.html',
  styles: [
  ]
})
export class BalanceDetailsComponent {

  constructor(route: ActivatedRoute, private store: Store<StoreConfig>) {
    // Fetch Id from route
    route.params.subscribe(params => {
      const id = Number(params['id'])
      if (id) {
        this.store.dispatch(Actions.ACTION_MODEL_LOAD({ id: id }))
      }
    })
  }

  balance$ = this.store.select(Selectors.SELECT_MODEL).pipe(
    map(model => model.balance)
  )

  details$ = this.store.select(Selectors.SELECT_MODEL).pipe(
    map(model => model.details)
  )
}
