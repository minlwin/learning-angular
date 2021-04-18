import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { routeAnimation } from './app-animations/app-routing.animations';
import * as Action from './app-store/app.actions';
import { StoreModel } from './app-store/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeAnimation,
  ]
})
export class AppComponent {
  constructor(store: Store<StoreModel>) {
    store.dispatch(Action.loadState())
    store.dispatch(Action.loadDistrict())
    store.dispatch(Action.loadTownship())
  }
}
