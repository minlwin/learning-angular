import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  templateUrl: './in-de-crements.component.html',
  animations: [
    trigger('filterAnimation', [

      transition(':increment', [
        query(':enter, :enter span', [
          style({ opacity: 0, width: '50%' }),
          animate('300ms ease-out', style({ opacity: 1, width: '*' }))
        ], { optional: true })
      ]),

      transition(':decrement', [
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0, width: '20%' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class InDeCrementsComponent {

  list: string[] = []

  add(input: any) {
    if (input.value) {
      this.list.push(input.value)
      input.value = ''
    }
  }

  remove(value: string) {
    this.list = this.list.filter(a => a !== value)
  }
}
