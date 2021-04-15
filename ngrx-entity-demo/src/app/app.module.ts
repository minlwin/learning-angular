import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reduceMember } from './store/member.reducer';
import { MemberDetailsComponent } from './view/member-details/member-details.component';
import { MemberEditComponent } from './view/member-edit/member-edit.component';
import { MemberListComponent } from './view/member-list/member-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      members: reduceMember
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
