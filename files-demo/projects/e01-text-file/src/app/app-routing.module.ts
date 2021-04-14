import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { ImageMultiComponent } from './image-multi/image-multi.component';
import { ImageSimpleComponent } from './image-simple/image-simple.component';
import { TextReactiveComponent } from './text-reactive/text-reactive.component';
import { TextSimpleComponent } from './text-simple/text-simple.component';

const routes: Routes = [
  { path: 'image-simple', component: ImageSimpleComponent },
  { path: 'image-multi', component: ImageMultiComponent },
  { path: 'image-crop', component: ImageCropComponent },
  { path: 'simple', component: TextSimpleComponent },
  { path: 'reactive', component: TextReactiveComponent },
  { path: '', redirectTo: '/simple', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
