import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  showModal = false

  @Input()
  title?: string

  @Output()
  onDone = new EventEmitter

  show() {
    this.showModal = true
  }

  hide() {
    this.showModal = false
  }

  pressOk() {
    this.onDone.emit(true)
  }

}
