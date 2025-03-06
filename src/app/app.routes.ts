import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'book-list', component: BookListComponent }, // List all books
    { path: 'book-details', component: BookDetailsComponent }, // View book details
    { path: 'book-form', component: BookFormComponent }, // Add a new book
    { path: 'book-form/:id', component: BookFormComponent } // Editing
    // Edit a book
];
