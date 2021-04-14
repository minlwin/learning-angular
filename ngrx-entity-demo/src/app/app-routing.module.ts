import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailsComponent } from './view/member-details/member-details.component';
import { MemberEditComponent } from './view/member-edit/member-edit.component';
import { MemberListComponent } from './view/member-list/member-list.component';

const routes: Routes = [
  {
    path: 'members', children: [
      { path: 'edit/:id', component: MemberEditComponent },
      { path: 'details/:id', component: MemberDetailsComponent },
      { path: '', component: MemberListComponent }
    ]
  },
  { path: '', redirectTo: '/members', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
