import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { AddBookComponent } from "./book/add-book/add-book.component";
import { EditBookComponent } from "./book/edit-book/edit-book.component";

const routes: Routes = [
    { path: 'books', component: BookComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'edit-book', component: EditBookComponent },
    {path : '', component : BookComponent}
  ];
  
  export const route = RouterModule.forRoot(routes);