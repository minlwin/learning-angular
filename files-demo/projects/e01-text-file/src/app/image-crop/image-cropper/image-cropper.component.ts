import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'image-cropper',
  templateUrl: './image-cropper.component.html',
  styles: [
  ]
})
export class ImageCropperComponent implements AfterViewInit {

  @ViewChild("image", { static: false })
  imageElement: ElementRef | undefined

  @Input('src')
  imageSrc: any

  @Input('height')
  imageHeight: any

  @Output()
  onCrop = new EventEmitter

  private cropper?: Cropper


  ngAfterViewInit() {
    console.log(this.imageSrc)
    if (this.imageSrc) {
      this.cropper = new Cropper(this.imageElement?.nativeElement, {
        movable: false,
        rotatable: false,
        crop: () => this.onCrop.emit(this.cropper?.getCroppedCanvas().toDataURL())
      })
    }
  }

  cropImage() {
    this.cropper?.crop()
  }

}
