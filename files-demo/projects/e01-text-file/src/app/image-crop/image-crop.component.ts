import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReactiveImageReader } from '../image-simple/reactive-image.reader';

declare var $: any

@Component({
  templateUrl: './image-crop.component.html',
  providers: [
    ReactiveImageReader
  ]
})
export class ImageCropComponent implements OnDestroy {

  constructor(private reader: ReactiveImageReader) { }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  imageSrc?: string
  cropSrc?: string

  private sub?: Subscription

  openFile() {
    $('#fileInput').click()
  }

  loadFile(event: any) {
    if (event.target.files[0]) {
      this.sub = this.reader.read(event.target.files[0]).subscribe(url => this.imageSrc = url)
    }
  }

  preview(image: string) {
    this.cropSrc = image
  }

  cropImage() {
    console.log("Crop : " + this.cropSrc)
    this.imageSrc = this.cropSrc
  }

}