import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Action from '../app-store/app.actions';
import { StoreModel } from '../app-store/app.model';
import * as Selector from '../app-store/app.selectors';

@Component({
  templateUrl: './district.component.html',
  styles: [
  ]
})
export class DistrictComponent {

  regions$ = this.store.select(Selector.regions)
  states$ = this.store.select(Selector.statesForFilter)

  list$ = this.store.select(Selector.districtsForResult)

  form: FormGroup

  constructor(buider: FormBuilder, private store: Store<StoreModel>) {
    store.dispatch(Action.clearSearchFilter())
    this.form = buider.group({
      region: '',
      state: '',
      name: ''
    })

    this.form.get('region')?.valueChanges.subscribe(region => store.dispatch(Action.addRegionFilter({ filter: region })))
  }

  search() {
    this.store.dispatch(Action.search({ filter: this.form.value }))
  }
}
