import { Component } from '@angular/core';
import { Categories } from '../categories';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
   selector: 'app-catalog',
   templateUrl: './catalogue.component.html',
   styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
   categories = [Categories[0], Categories[1], Categories[2], Categories[3], Categories[4], Categories[5], Categories[6], Categories[7], Categories[8]];
   currentCategory = {};
   constructor(private route: ActivatedRoute, private router: Router) {}

   ngOnInit(): void {
      this.route.queryParams.subscribe((params) => (this.setCategory(params['category'])));
   }

   setCategory(category: any): void {
      this.currentCategory = this.categories[category];
   }
}
