import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../shared/book.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService) { }

  ngOnInit() {
    let bookId = localStorage.getItem("editBookId");
    this.editForm = this.formBuilder.group({
      id: [],
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      bookAbstract: ['', Validators.required]
    });
    this.bookService.getBookById(+bookId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.bookService.updateBook(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['books']);
        },
        error => {
          alert(error);
        });
  }
}
