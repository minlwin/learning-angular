import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { LocationEffects } from './app-store/app.effects';
import * as Store from './app-store/app.reducers';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { TownshipComponent } from './township/township.component';
import { RegionPipe } from './app-pipes/region.pipe';
import { StatePipe } from './app-pipes/state.pipe';
import { DistrictPipe } from './app-pipes/district.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    TownshipComponent,
    DistrictComponent,
    RegionPipe,
    StatePipe,
    DistrictPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Store.appStore),
    EffectsModule.forRoot([LocationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
