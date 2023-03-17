import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-catalogue-item',
   templateUrl: './catalogue-item.component.html',
   styleUrls: ['./catalogue-item.component.css'],
})
export class CatalogueItemComponent {
   constructor() {}

   @Input() name: any;

   @Input() price: any;

   @Input() url: any;

   @Input() id: any;
}
