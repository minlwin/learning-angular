import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from 'src/app/commons/widgets/modal-dialog/modal-dialog.component';
import { Category } from 'src/app/models/dto/category.dto';
import { Product } from 'src/app/models/dto/product.dto';
import { CategoryService } from 'src/app/models/service/category.service';
import { ProductService } from 'src/app/models/service/product.service';
import { SubSink } from 'subsink';

@Component({
  templateUrl: './products.component.html',
  providers: [
    SubSink
  ]
})
export class ProductsComponent implements OnDestroy {

  categories: Category[] = []
  list: Product[] = []

  editForm: FormGroup
  searchForm: FormGroup

  @ViewChild(ModalDialogComponent)
  private dialog?: ModalDialogComponent

  constructor(
    builder: FormBuilder,
    catService: CategoryService,
    private service: ProductService,
    private sub: SubSink) {

    this.searchForm = builder.group({
      name: '',
      category: '',
      from: '',
      to: ''
    })

    this.editForm = builder.group({
      name: ['', Validators.required],
      category: [null, Validators.required],
      price: [0, Validators.min(100)],
      deleted: false
    })

    this.sub.sink = catService.search().subscribe(data => this.categories = data)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  save(done: any) {
    if (done && this.editForm.valid) {
      this.sub.sink = this.service.save(this.editForm.value).subscribe(data => this.search())
      this.dialog?.hide()
    }
  }

  addNew() {
    this.editForm.reset()
    this.editForm.patchValue({
      name: '',
      category: '',
      price: 0,
      deleted: false
    })
    this.dialog?.show()
  }

  upload(event: any) {

  }

  edit(data: Product) {
    this.editForm.patchValue(data)
    this.dialog?.show()
  }

  search() {
    this.sub.sink = this.service.search(this.searchForm.value).subscribe(data => this.list = data)
  }
}
