import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor( private route: ActivatedRoute, private router: Router) {}


   category: any = 'Categorias';
   categories = [
      { name: 'Todas las categorias' },
      { name: 'Componentes', id: 0 },
      { name: 'Portatiles', id: 1 },
      { name: 'Ordenadores', id: 2 },
      { name: 'Smartphones', id: 3 },
      { name: 'Televisores', id: 4 },
      { name: 'Electrodomesticos', id: 5 },
      { name: 'Smartwatchs', id: 6 },
      { name: 'Perifericos', id: 7 },
      { name: 'Consolas', id: 8 },
   ];


   name: any = '';

   setCategory(categoria: String): any {
      this.category = categoria;
   }

   ngOnInit(): void {
      this.name = localStorage.getItem('name');
   }

   logout() : void {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
   }
}
