import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from 'src/app/commons/widgets/modal-dialog/modal-dialog.component';
import { Category } from 'src/app/models/dto/category.dto';
import { CategoryService } from 'src/app/models/service/category.service';

@Component({
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent {

  list?: Category[]

  @ViewChild(ModalDialogComponent)
  modal?: ModalDialogComponent

  searchForm: FormGroup
  editForm: FormGroup

  constructor(private service: CategoryService, builder: FormBuilder) {
    service.search().subscribe(data => this.list = data)
    this.editForm = builder.group({
      objectId: null,
      name: ['', Validators.required]
    })

    this.searchForm = builder.group({
      name: ''
    })
  }

  addNew() {
    this.editForm.reset()
    this.modal?.show()
  }

  edit(data: Category) {
    this.editForm.patchValue(data)
    this.modal?.show()
  }

  save(action: any) {
    if (action) {
      this.service.save(this.editForm.value).subscribe(data => {
        this.list = data
      })
      this.modal?.hide()
    }
  }

  search() {
    this.service.search(this.searchForm.value).subscribe(data => this.list = data)
  }

}
