import { Component } from '@angular/core';
import { Categories } from '../categories';
@Component({
   selector: 'app-top-categories',
   templateUrl: './top-categories.component.html',
   styleUrls: ['./top-categories.component.css'],
})
export class TopCategoriesComponent {
   categories = [
      { name: Categories[Categories.Componentes], path: '../../assets/componente.PNG', index: 0 },
      { name: Categories[Categories.Portatiles], path: '../../assets/portatil.jpg', index: 1 },
      { name: Categories[Categories.Smartphones], path: '../../assets/smartphone.PNG', index: 3 },
      { name: Categories[Categories.Ordenadores], path: '../../assets/pc.PNG', index: 2 },
      { name: Categories[Categories.Consolas], path: '../../assets/consola.PNG', index: 8 },
   ];
}
