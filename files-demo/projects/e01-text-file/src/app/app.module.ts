import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextSimpleComponent } from './text-simple/text-simple.component';
import { TextReactiveComponent } from './text-reactive/text-reactive.component';
import { ImageSimpleComponent } from './image-simple/image-simple.component';
import { ImageMultiComponent } from './image-multi/image-multi.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { ImageCropperComponent } from './image-crop/image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSimpleComponent,
    TextReactiveComponent,
    ImageSimpleComponent,
    ImageMultiComponent,
    ImageCropComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
