import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  templateUrl: './slider.component.html',
  animations: [
    trigger('slideIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class SliderComponent {

  slide = 1

}
