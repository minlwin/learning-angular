import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FaderComponent } from './fader/fader.component';
import { HelloComponent } from './hello/hello.component';
import { InDeCrementsComponent } from './in-de-crements/in-de-crements.component';
import { ListEnterComponent } from './list-enter/list-enter.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: 'in-de', component: InDeCrementsComponent },
  { path: 'list', component: ListEnterComponent },
  { path: 'fadein', component: FaderComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SliderComponent,
    FaderComponent,
    ListEnterComponent,
    InDeCrementsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
