import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { TownshipComponent } from './township/township.component';
import { DistrictsEffects } from './utils/effects/districts.effects';
import { StatesEffects } from './utils/effects/states.effects';
import { TownshipsEffects } from './utils/effects/townships.effects';
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
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
