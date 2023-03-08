import { Component } from '@angular/core';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
   category :any = 'Categorias';
   categories = [
      { name: 'Todas las categorias' },
      { name: 'Componentes', id: 0 },
      { name: 'Portatiles', id: 1 },
      { name: 'Ordenadores', id: 2 },
      { name: 'Smartphones', id: 3 },
      { name: 'Televisiones', id: 4 },
      { name: 'Electrodomesticos', id: 5 },
      { name: 'Smartwatchs', id: 6 },
      { name: 'Perifericos', id: 7 },
      { name: 'Consolas', id: 8 },

   ];

   setCategory(categoria: String): any {
      this.category = categoria;
      console.log('a');
   }
}
