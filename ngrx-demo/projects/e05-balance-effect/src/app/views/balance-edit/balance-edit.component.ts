import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { BalanceDetails } from '../../services/balance.service';
import { ACTION_CATEGORY_SEARCH } from '../../store/states/category/category.actions';
import * as Actions from '../../store/states/model/model.actions';
import { StoreConfig } from '../../store/store.config';
import * as Selectors from '../../store/store.selectors';

@Component({
  templateUrl: './balance-edit.component.html',
  providers: [
    SubSink
  ]
})
export class BalanceEditComponent implements OnInit, OnDestroy {

  form: FormGroup
  categories$ = this.store.select(Selectors.SELECT_CATEGORIES)

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private sub: SubSink,
    private store: Store<StoreConfig>
  ) {

    // Build From Group Object
    this.form = builder.group({
      balance: builder.group({
        id: 0,
        useDate: ['', Validators.required],
        type: ['', Validators.required],
        category: ['', Validators.required],
        total: [0, Validators.min(500)]
      }),
      details: builder.array([this.getControl()])
    })

    // Calculate Total When Details List Changes
    this.detailsForm.valueChanges.subscribe(
      data => {
        const total = this.detailsForm.controls.map(a => a.value.amount).reduce((a, b) => a + b)
        this.balanceForm.patchValue({ total: total })
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {

    // Load Category by type
    this.balanceForm.get('type')?.valueChanges.subscribe(type => {
      this.store.dispatch(ACTION_CATEGORY_SEARCH({ payload: { type: type } }))
    })

    // Set Balance Model 
    this.sub.sink = this.store.select(Selectors.SELECT_MODEL).subscribe(model => {
      if (model.balance.id) {
        this.balanceForm.patchValue(model.balance)

        this.detailsForm.clear()
        model.details.map(a => {
          let group = this.getControl()
          group.patchValue(a)
          return group
        }).forEach(a => this.detailsForm.controls.push(a))
      }
    })

    // Fetch Id from route
    this.route.params.subscribe(params => {
      const id = Number(params['id'])
      if (id) {
        this.store.dispatch(Actions.ACTION_MODEL_LOAD({ id: id }))
      } else {
        this.balanceForm.patchValue({ type: params['type'] })
      }
    })
  }

  addDetails() {
    this.detailsForm.push(this.getControl())
  }

  removeDetails(index: number) {
    const control = this.detailsForm.controls[index]

    if (control.value.id) {
      control.patchValue({ deleted: true })
    } else {
      this.detailsForm.removeAt(index)
    }
  }

  save() {
    this.store.dispatch(Actions.ACTION_MODEL_SAVE({ payload: this.form.value }))
  }

  get detailsForm(): FormArray {
    return this.form.get('details') as FormArray
  }

  get balanceForm(): FormGroup {
    return this.form.get('balance') as FormGroup
  }

  private getControl(details?: BalanceDetails): FormGroup {
    const group = this.builder.group({
      id: 0,
      balance: null,
      reason: ['', Validators.required],
      details: '',
      amount: [0, Validators.min(500)],
      deleted: false
    })
    if (details) {
      group.patchValue(details)
    }
    return group
  }

  compareCategory(a: any, b: any) {
    return a?.id == b?.id
  }

}
