import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',  
  imports: [CommonModule],
  providers: [BookService]
})
export class HomeComponent {
  books: { title: string; author: string }[] = [];
  selectedBook: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onSelectBook(bookTitle: string) {
    this.selectedBook = bookTitle;
  }


}
