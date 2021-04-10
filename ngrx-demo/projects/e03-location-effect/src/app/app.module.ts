import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reduceTargets, reduceTownships } from './states/location.actions';
import { TownshipsEffects } from './states/location.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      townshipModel: reduceTownships,
      targetModel: reduceTargets
    }),
    EffectsModule.forRoot([TownshipsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
