import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { showAndHide } from '../app-animations/app-common.animations';
import * as Action from '../app-store/app.actions';
import { StoreModel } from '../app-store/app.model';
import * as Selector from '../app-store/app.selectors';


@Component({
  templateUrl: './state.component.html',
  animations: [showAndHide]
})
export class StateComponent {

  regions$ = this.store.select(Selector.regions)
  list$ = this.store.select(Selector.statesForResult)

  form: FormGroup

  constructor(buider: FormBuilder, private store: Store<StoreModel>) {
    store.dispatch(Action.clearSearchFilter())
    this.form = buider.group({
      region: '',
      name: ''
    })
  }

  search() {
    this.store.dispatch(Action.search({ filter: this.form.value }))
  }
}
