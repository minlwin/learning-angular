import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CLEAR_RESULTS, DISTRICT_LOAD, STATE_LOAD, TOWNSHIP_LOAD } from '../utils/states/location.actions';
import { LocationState } from '../utils/states/location.model';
import { SELECT_DISTRICTS, SELECT_REGIONS, SELECT_STATES, SELECT_TOWNSHIPS } from '../utils/states/location.selectors';

@Component({
  templateUrl: './township.component.html',
})
export class TownshipComponent {

  constructor(builder: FormBuilder, private store: Store<LocationState>) {
    this.form = builder.group({
      region: '',
      state: '',
      district: '',
      name: ''
    })

    store.dispatch(CLEAR_RESULTS())

    this.form.get('region')?.valueChanges.subscribe(region => store.dispatch(STATE_LOAD({ region: region })))
    this.form.get('state')?.valueChanges.subscribe(state => store.dispatch(DISTRICT_LOAD({ state: state })))
  }

  form: FormGroup

  regions$ = this.store.select(SELECT_REGIONS)
  states$ = this.store.select(SELECT_STATES)
  districts$ = this.store.select(SELECT_DISTRICTS)
  townships$ = this.store.select(SELECT_TOWNSHIPS)

  search() {
    this.store.dispatch(TOWNSHIP_LOAD(this.form.value))
  }
}
