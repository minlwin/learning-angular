import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reduceCounterState } from './states/counter.store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: reduceCounterState })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
