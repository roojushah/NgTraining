import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService,private router: Router) { }

  books: Book[];

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data;
      });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book.id)
      .subscribe( data => {
        this.books = data;
        // this.router.navigate(['/books']);
      })
  };

  addBook(): void {
    this.router.navigate(['/add-book']);
  };

  editBook(book: Book): void {
    localStorage.removeItem("editBookId");
    localStorage.setItem("editBookId", book.id.toString());
    this.router.navigate(['edit-book']);
  };
}
