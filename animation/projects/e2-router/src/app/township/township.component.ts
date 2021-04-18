import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Action from '../app-store/app.actions';
import { StoreModel } from '../app-store/app.model';
import * as Selector from '../app-store/app.selectors';

@Component({
  templateUrl: './township.component.html',
  styles: [
  ]
})
export class TownshipComponent {

  regions$ = this.store.select(Selector.regions)
  states$ = this.store.select(Selector.statesForFilter)
  districts$ = this.store.select(Selector.districtsForFilter)

  list$ = this.store.select(Selector.townshipsForResult)

  form: FormGroup

  constructor(buider: FormBuilder, private store: Store<StoreModel>) {
    store.dispatch(Action.clearSearchFilter())
    this.form = buider.group({
      region: '',
      state: '',
      district: '',
      name: ''
    })
    this.form.get('region')?.valueChanges.subscribe(region => store.dispatch(Action.addRegionFilter({ filter: region })))
    this.form.get('state')?.valueChanges.subscribe(state => store.dispatch(Action.addStateFilter({ filter: state })))
  }

  search() {
    this.store.dispatch(Action.search({ filter: this.form.value }))
  }
}
