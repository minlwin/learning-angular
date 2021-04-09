import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { editAction, removeAction, saveAction, selectEditData, selectStudents, Student, StudentState } from './states/app.state';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  target$ = this.store.select(selectEditData)
  list$ = this.store.select(selectStudents)

  constructor(private store: Store<{ studentModel: StudentState }>) { }

  addNew() {
    $('#editDialog').modal('show')
  }

  edit(student: Student) {
    this.store.dispatch(editAction(student))
    $('#editDialog').modal('show')
  }

  save(student: Student) {
    this.store.dispatch(saveAction(student))
    $('#editDialog').modal('hide')
  }

  delete(student: Student) {
    this.store.dispatch(removeAction(student))
  }
}
