import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books = [
    { title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
    { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
    { title: 'Don Quijote', author: 'Miguel de Cervantes' },
    { title: 'Matar a un ruiseñor', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Crimen y Castigo', author: 'Fiódor Dostoyevski' }
  ];

  getBooks() {
    return this.books;
  }
}
