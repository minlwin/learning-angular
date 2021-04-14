import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReactiveImageReader } from '../image-simple/reactive-image.reader';
import { ReactiveImagesReader } from './reactive-images.reader';

declare var $: any

@Component({
  templateUrl: './image-multi.component.html',
  providers: [
    ReactiveImageReader, ReactiveImagesReader
  ]
})
export class ImageMultiComponent implements OnDestroy {

  private sub: Subscription | undefined
  array: ReadonlyArray<string> = []

  constructor(private reader: ReactiveImagesReader) { }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  openFile() {
    $('#fileInput').click()
  }

  readFile(event: any) {
    this.sub = this.reader.read(event.target.files).subscribe(data => this.array = data)
  }
}
