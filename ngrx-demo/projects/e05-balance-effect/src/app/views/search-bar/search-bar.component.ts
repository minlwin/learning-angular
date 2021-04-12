import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ACTION_CATEGORY_RESET, ACTION_CATEGORY_SEARCH } from '../../store/states/category/category.actions';
import { StoreConfig } from '../../store/store.config';
import { SELECT_CATEGORIES } from '../../store/store.selectors';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnChanges {

  form: FormGroup
  categories$ = this.store.select(SELECT_CATEGORIES)

  @Input() type: any

  @Output() onSearch = new EventEmitter

  constructor(builder: FormBuilder, private store: Store<StoreConfig>) {
    // Reset Category
    store.dispatch(ACTION_CATEGORY_RESET())

    this.form = builder.group({
      type: '',
      category: '',
      from: '',
      to: ''
    })

    // Type Change Action
    this.form.get('type')?.valueChanges.subscribe(type => {
      this.store.dispatch(type ? ACTION_CATEGORY_SEARCH({ payload: { type: type } }) : ACTION_CATEGORY_RESET())
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.get('type')?.patchValue(this.type || '')
  }

  search() {
    this.onSearch.emit(this.form.value)
  }

}
