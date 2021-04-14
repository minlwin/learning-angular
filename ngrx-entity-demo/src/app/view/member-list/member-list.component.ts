import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Member, MemberState, ROLES } from 'src/app/store/member.model';
import * as Actions from '../../store/member.action';
import * as Selectors from '../../store/member.selector';

@Component({
  templateUrl: './member-list.component.html',
  styles: [
  ]
})
export class MemberListComponent {

  form: FormGroup
  list$: Observable<Member[]>
  roles = ['', ...ROLES]

  constructor(
    builder: FormBuilder,
    private store$: Store<{ members: MemberState }>
  ) {
    this.form = builder.group({
      role: '',
      name: ''
    })

    this.list$ = store$.select(Selectors.FILTERED_MEMBER)
    store$.dispatch(Actions.reSetFilter())
  }

  search() {
    this.store$.dispatch(Actions.setFilter({ filter: this.form.value }))
  }

}
