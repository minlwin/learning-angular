import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styles: [
  ]
})
export class EditStudentComponent {

  @Input() set data(item: any) {
    if (item) {
      this.form.patchValue(item)
    }
  }

  @Output() onSave = new EventEmitter

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }
}
