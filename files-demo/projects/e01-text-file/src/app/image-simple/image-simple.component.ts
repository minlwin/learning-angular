import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReactiveImageReader } from './reactive-image.reader';

declare var $: any

@Component({
  templateUrl: './image-simple.component.html',
  providers: [
    ReactiveImageReader
  ]
})
export class ImageSimpleComponent implements OnDestroy {

  image: any
  private sub: Subscription | undefined

  constructor(private reader: ReactiveImageReader) { }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  openFile() {
    $('#fileInput').click()
  }

  readFile(event: any) {
    if (event.target.files[0]) {
      this.sub = this.reader.read(event.target.files[0]).subscribe(url => this.image = url)
    }
  }
}
