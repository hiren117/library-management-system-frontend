import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // { path: '', component: HomeComponent }, // Default route
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect default route to /login
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'book-list', component: BookListComponent }, // List all books
    { path: 'book-details', component: BookDetailsComponent }, // View book details
    { path: 'book-form', component: BookFormComponent }, // Add a new book
    { path: 'book-form/:id', component: BookFormComponent }, // Editing

    // { path: '', redirectTo: '/login', pathMatch: 'full' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
