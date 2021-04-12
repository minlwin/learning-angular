import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styles: [
  ]
})
export class CategoryEditComponent {

  form: FormGroup

  @Input() set item(data: any) {
    this.form.patchValue(data)
  }

  @Output() onSave = new EventEmitter

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      type: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }

}
