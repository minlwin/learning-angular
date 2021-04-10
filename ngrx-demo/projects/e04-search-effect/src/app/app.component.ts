import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { REGION_LOAD } from './utils/states/location.actions';
import { LocationState } from './utils/states/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private store: Store<LocationState>) { }

  ngOnInit(): void {
    this.store.dispatch(REGION_LOAD())
  }
}
