import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { TownshipComponent } from './township/township.component';

const routes: Routes = [
  { path: 'state', component: StateComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'township', component: TownshipComponent },
  { path: '', redirectTo: '/state', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
