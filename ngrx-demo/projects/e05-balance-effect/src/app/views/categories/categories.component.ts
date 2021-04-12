import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../../services/category.service';
import { ACTION_CATEGORY_SAVE, ACTION_CATEGORY_SEARCH } from '../../store/states/category/category.actions';
import { StoreConfig } from '../../store/store.config';
import { SELECT_CATEGORIES } from '../../store/store.selectors';

declare var $: any

@Component({
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {

  target: any

  constructor(private store: Store<StoreConfig>) {
    store.dispatch(ACTION_CATEGORY_SEARCH({}))
  }

  list$ = this.store.select(SELECT_CATEGORIES)

  addNew() {
    this.edit({ id: 0, type: '', name: '' })
  }

  edit(item: Category) {
    this.target = item
    $('#editDialog').modal('show')
  }

  save(item: Category) {
    this.store.dispatch(ACTION_CATEGORY_SAVE({ payload: item }))
    $('#editDialog').modal('hide')
  }
}
