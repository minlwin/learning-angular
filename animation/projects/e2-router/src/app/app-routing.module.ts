import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { TownshipComponent } from './township/township.component';

const routes: Routes = [
  { path: 'state', component: StateComponent, data: { animation: 'state' } },
  { path: 'district', component: DistrictComponent, data: { animation: 'district' } },
  { path: 'township', component: TownshipComponent, data: { animation: 'township' } },
  { path: '', redirectTo: '/state', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
