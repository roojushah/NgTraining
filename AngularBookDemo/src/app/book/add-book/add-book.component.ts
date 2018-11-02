import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Book } from '../../shared/book';
import { BookService } from '../../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private bookService: BookService,private router: Router) { }

  
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      bookAbstract: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);

    this.bookService.createBook(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['books']);
      });
  }
}
