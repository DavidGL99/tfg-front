import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';

const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', component: TopCategoriesComponent },
  { path: 'product', component: ProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
