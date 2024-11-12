import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'  
})
export class AboutComponent {
  description = 'Librería sueña es un lugar para los amantes de los libros.';
  imageUrl = 'assets/images/librerias_en_la_gran_via_de_madrid_1911_600_square.jpg';
}
