import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { CLEAR_RESULTS, DISTRICT_LOAD, STATE_LOAD } from '../utils/states/location.actions';
import { LocationState } from '../utils/states/location.model';
import { SELECT_DISTRICTS, SELECT_REGIONS, SELECT_STATES } from '../utils/states/location.selectors';

@Component({
  templateUrl: './district.component.html',
  providers: [SubSink]
})
export class DistrictComponent {

  constructor(private store: Store<LocationState>, builder: FormBuilder) {
    this.form = builder.group({
      region: '',
      state: '',
      name: ''
    })

    this.form.get('region')?.valueChanges
      .pipe(
        tap(_ => this.form.patchValue({ state: '' }))
      )
      .subscribe(region => store.dispatch(STATE_LOAD({ region: region })))

    store.dispatch(CLEAR_RESULTS())
  }

  form: FormGroup

  regions$ = this.store.select(SELECT_REGIONS)
  states$ = this.store.select(SELECT_STATES)
  districts$ = this.store.select(SELECT_DISTRICTS)

  search() {
    this.store.dispatch(DISTRICT_LOAD(this.form.value))
  }

}
