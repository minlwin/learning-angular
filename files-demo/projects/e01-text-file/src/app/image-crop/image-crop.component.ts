import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private reader: ReactiveImageReader, private sanitizer: DomSanitizer) { }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  imageSrc?: any
  cropSrc?: any

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
    this.cropSrc = image ? this.sanitizer.bypassSecurityTrustResourceUrl(image) : ''
  }

  cropImage() {
    console.log("Crop : " + this.cropSrc)
    this.imageSrc = this.cropSrc
  }

}
