import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CLEAR_RESULTS, STATE_LOAD } from '../utils/states/location.actions';
import { LocationState } from '../utils/states/location.model';
import { SELECT_REGIONS, SELECT_STATES } from '../utils/states/location.selectors';

@Component({
  templateUrl: './state.component.html',
})
export class StateComponent {

  constructor(builder: FormBuilder, private store: Store<LocationState>) {
    this.form = builder.group({
      region: '',
      name: ''
    })

    store.dispatch(CLEAR_RESULTS())
  }

  form: FormGroup
  regions$ = this.store.select(SELECT_REGIONS)
  list$ = this.store.select(SELECT_STATES)

  search() {
    this.store.dispatch(STATE_LOAD(this.form.value))
  }
}
