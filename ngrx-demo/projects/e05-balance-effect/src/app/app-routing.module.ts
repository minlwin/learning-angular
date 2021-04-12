import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceDetailsComponent } from './views/balance-details/balance-details.component';
import { BalanceEditComponent } from './views/balance-edit/balance-edit.component';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { BalanceReportsComponent } from './views/balance-reports/balance-reports.component';
import { CategoriesComponent } from './views/categories/categories.component';

const routes: Routes = [
  { path: 'category', component: CategoriesComponent },
  { path: 'balance/:type/:id/edit', component: BalanceEditComponent },
  { path: 'balance/:type/:id', component: BalanceDetailsComponent },
  { path: 'balance/:type', component: BalanceListComponent },
  { path: 'report', component: BalanceReportsComponent },
  { path: '', redirectTo: '/report', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
