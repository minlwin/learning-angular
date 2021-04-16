import { Component } from '@angular/core';
import { btnAnimation, openCloseAnimation } from '../animations/app-animations';

@Component({
  templateUrl: './hello.component.html',
  animations: [
    btnAnimation, openCloseAnimation
  ]
})
export class HelloComponent {

  isOpen = true

  switchState() {
    this.isOpen = !this.isOpen
  }

}
