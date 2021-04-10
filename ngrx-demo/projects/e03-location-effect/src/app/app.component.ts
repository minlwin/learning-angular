import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { actionLoad, addTarget, removeTarget } from './states/location.actions';
import { AppState, District, State, Township } from './states/location.model';
import { selectAllRegions, selectDistrictByState, selectStatesByRegion, selectTargetTownships, selectTownshipsByDistrict } from './states/location.selects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SubSink]
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>, private sub: SubSink) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.store.dispatch(actionLoad())
  }

  townships: Township[] = []
  districts: District[] = []
  states: State[] = []

  regions$ = this.store.select(selectAllRegions).pipe(tap(a => {
    if (a.length) {
      this.changeRegion(a[0])
    }
  }))

  targets$ = this.store.select(selectTargetTownships)

  changeRegion(region: string) {
    this.sub.sink = this.store.select(selectStatesByRegion, region)
      .pipe(tap(a => this.changeState(a[0].id)))
      .subscribe(list => this.states = list)
  }

  changeState(state: any) {
    this.sub.sink = this.store.select(selectDistrictByState, state)
      .pipe(tap(a => this.changeDistrict(a[0].id)))
      .subscribe(list => this.districts = list)
  }

  changeDistrict(district: any) {
    this.sub.sink = this.store.select(selectTownshipsByDistrict, district)
      .subscribe(list => this.townships = list)
  }

  addToTargets(township: Township) {
    this.store.dispatch(addTarget(township))
  }

  removeFromTarget(township: Township) {
    this.store.dispatch(removeTarget(township))
  }
}
