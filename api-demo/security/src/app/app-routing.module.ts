import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './views/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'member', loadChildren: () => import('./views/member/member.module').then(m => m.MemberModule) },
  { path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
