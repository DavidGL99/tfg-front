import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueItemComponent } from './catalogue-item/catalogue-item.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopCategoriesComponent,
    CatalogueComponent,
    CatalogueItemComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
