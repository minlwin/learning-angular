import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MemberIdGenerator } from 'src/app/service/member.id.generater';
import { Member, MemberState, ROLES } from 'src/app/store/member.model';
import * as Actions from '../../store/member.action';
import * as Selectors from '../../store/member.selector';

@Component({
  templateUrl: './member-edit.component.html',
  styles: [
  ]
})
export class MemberEditComponent implements OnDestroy {

  form: FormGroup
  roles = ['', ...ROLES]

  private sub?: Subscription

  constructor(
    builder: FormBuilder,
    route: ActivatedRoute,
    private router: Router,
    private idGen: MemberIdGenerator,
    private store: Store<{ members: MemberState }>
  ) {
    this.form = builder.group({
      id: 0,
      name: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })

    this.sub = store.select(Selectors.SELECTED_MEMBER).subscribe(member => {
      if (member) {
        this.form.patchValue(member)
      }
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  save() {
    const member: Member = this.form.value
    let { id, ...update } = member

    if (!id) {
      id = this.idGen.next()
    }

    this.store.dispatch(member.id ?
      Actions.update({ update: { id: member.id, changes: update } }) :
      Actions.create({ member: { ...update, id: id } }))

    this.router.navigate(['/members/details', id])
  }

}
