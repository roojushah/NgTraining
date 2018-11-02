import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "./book";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api';

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl + '/books');
  }

  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + '/book/' + id);
  }

  createBook(book: Book) {
    return this.http.post(this.baseUrl + '/book/save', book);
  }

  updateBook(book: Book) {
    return this.http.put(this.baseUrl + '/book/update', book);
  }

  deleteBook(id: number) {
    return this.http.delete<Book[]>(this.baseUrl + '/book/delete/' + id);
  }
}