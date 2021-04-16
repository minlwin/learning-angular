import { Component } from '@angular/core';
import { btnAnimation, listAnimation } from '../animations/app-animations';

@Component({
  templateUrl: './list-enter.component.html',
  animations: [
    btnAnimation, listAnimation
  ]
})
export class ListEnterComponent {

  list: string[] = []

  switchState() {
    if (this.isEmpty) {
      this.list = ["Hello Angular", "Hello TypeScript", "Hello Animation"]
    } else {
      this.list = []
    }
  }

  get isEmpty() {
    return this.list.length == 0
  }
}
