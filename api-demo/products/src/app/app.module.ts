import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconEditComponent } from './commons/icons/icon-edit/icon-edit.component';
import { IconGiftComponent } from './commons/icons/icon-gift/icon-gift.component';
import { IconTagComponent } from './commons/icons/icon-tag/icon-tag.component';
import { ModalDialogComponent } from './commons/widgets/modal-dialog/modal-dialog.component';
import { ParseApiInterceptor } from './models/interceptor/apikey.interceptor';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductsComponent } from './views/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    ModalDialogComponent,
    IconEditComponent,
    IconTagComponent,
    IconGiftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useExisting: ParseApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
