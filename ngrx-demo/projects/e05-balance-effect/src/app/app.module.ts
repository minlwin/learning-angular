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
import { BalanceDetailsEffects } from './store/effects/balance-details.effects';
import { BalanceEffects } from './store/effects/balance.effects';
import { CategoryEffects } from './store/effects/category.effects';
import { ModelEffects } from './store/effects/model.effects';
import { APP_STORE } from './store/store.config';
import { BalanceDetailsComponent } from './views/balance-details/balance-details.component';
import { BalanceEditComponent } from './views/balance-edit/balance-edit.component';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { BalanceReportsComponent } from './views/balance-reports/balance-reports.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoryEditComponent } from './views/categories/category-edit/category-edit.component';
import { SearchBarComponent } from './views/search-bar/search-bar.component';
import { CategoryPipe } from './pipes/category.pipe';
import { HeaderComponent } from './views/balance-details/header/header.component';
import { DetailsComponent } from './views/balance-details/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BalanceListComponent,
    BalanceEditComponent,
    BalanceDetailsComponent,
    BalanceReportsComponent,
    SearchBarComponent,
    CategoryEditComponent,
    CategoryPipe,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(APP_STORE),
    EffectsModule.forRoot([
      CategoryEffects,
      BalanceEffects,
      BalanceDetailsEffects,
      ModelEffects
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
