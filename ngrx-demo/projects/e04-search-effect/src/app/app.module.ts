import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TownshipsEffects } from 'projects/e03-location-effect/src/app/states/location.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { TownshipComponent } from './township/township.component';
import { DistrictsEffects } from './utils/effects/districts.effects';
import { StatesEffects } from './utils/effects/states.effects';
import { reduceAppState } from './utils/states/location.reducers';


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    TownshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ locations: reduceAppState }),
    EffectsModule.forRoot([
      StatesEffects, DistrictsEffects, TownshipsEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
