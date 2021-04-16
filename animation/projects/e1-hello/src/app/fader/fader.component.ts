import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  templateUrl: './fader.component.html',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in', style({ opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class FaderComponent {

  slide = 1

}
