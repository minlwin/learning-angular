import { Component, EventEmitter, Input, Output } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'image-cropper',
  templateUrl: './image-cropper.component.html',
  styles: [
  ]
})
export class ImageCropperComponent {

  @Input('src')
  imageSrc: any

  @Input('height')
  imageHeight: any

  @Output()
  onCrop = new EventEmitter

  private cropper?: Cropper

  /**
   * Event Listener for Image Source Loaded
   * @param event Image Load Event
   */
  loadImage(event: any) {

    // Destroy Cropper when image src has been changed
    this.cropper?.destroy()

    if (this.imageSrc) {
      // Create Cropper Object
      this.cropper = new Cropper(event.target, {
        movable: false,
        rotatable: false,
        viewMode: 1,
        guides: false,
        background: false,
        autoCropArea: 1,
        // Crop Callback
        crop: () => this.onCrop.emit(this.cropper?.getCroppedCanvas().toDataURL())
      })
    }
  }

}
