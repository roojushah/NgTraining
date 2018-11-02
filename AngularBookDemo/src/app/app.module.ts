import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './shared/book.service';
import { HttpClientModule } from '@angular/common/http';
import { route } from './app.routing';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    route,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
