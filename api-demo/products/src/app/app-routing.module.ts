import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductDetailsComponent } from './views/products/product-details/product-details.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  { path: 'category', component: CategoriesComponent },
  {
    path: 'product', children: [
      { path: '', component: ProductsComponent },
      { path: 'details', component: ProductDetailsComponent }
    ]
  },
  { path: '', redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
