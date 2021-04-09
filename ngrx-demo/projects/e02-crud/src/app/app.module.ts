import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { reduceAppState } from './states/app.state';

@NgModule({
  declarations: [
    AppComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ studentModel: reduceAppState })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
