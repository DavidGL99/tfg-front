import { Component } from '@angular/core';
import { Categories } from '../categories';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
   selector: 'app-catalog',
   templateUrl: './catalogue.component.html',
   styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
   categories = [Categories[0], Categories[1], Categories[2], Categories[3], Categories[4], Categories[5], Categories[6], Categories[7], Categories[8]];
   currentCategory: String = '';
   products = [];
   constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

   ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
         this.setCategory(params['category']);
         if (!params['category']) {
            this.getAll();
         } else {
            this.getAllByCategory();
         }
      });
   }

   setCategory(category: any): void {
      this.currentCategory = this.categories[category];
   }

   getAllByCategory(): void {
      this.productService.getAllByCategory(this.currentCategory.toLowerCase()).subscribe((res) => {
         res.forEach((a: any) => {
          a.price = !a.price.includes('€') ? a.price.replace('–', '€') :  a.price.replace('–', '')
          a.price = !a.price.includes('€') ? a.price.replace('.', '€') :  a.price.replace('.', '')
         });
         this.products = res;
      });
   }

   getAll(): void {
      this.productService.getAll().subscribe((res) => {
        res.forEach((a: any) => {
          a.price = !a.price.includes('€') ? a.price.replace('–', '€') :  a.price.replace('–', '')
          a.price = !a.price.includes('€') ? a.price.replace('.', '€') :  a.price.replace('.', '')
         });
         this.products = res;
      });
   }
}
