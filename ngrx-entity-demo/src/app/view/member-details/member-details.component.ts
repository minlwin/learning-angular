import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MemberState } from 'src/app/store/member.model';
import { SubSink } from 'subsink';
import * as Actions from '../../store/member.action';
import * as Selectors from '../../store/member.selector';

@Component({
  templateUrl: './member-details.component.html',
  providers: [
    SubSink
  ]
})
export class MemberDetailsComponent implements OnDestroy {

  member: any

  constructor(
    route: ActivatedRoute,
    private sub: SubSink,
    store: Store<{ members: MemberState }>
  ) {

    this.sub.sink = route.params.subscribe(params => {
      store.dispatch(Actions.setSelected({ id: Number(params['id']) }))
    })

    this.sub.sink = store.select(Selectors.SELECTED_MEMBER).subscribe(member => {
      this.member = member
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
