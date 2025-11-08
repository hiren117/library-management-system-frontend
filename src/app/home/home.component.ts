import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToBookForm() {
    this.router.navigate(['/book-form']);
  }
  goToBookList() {
    this.router.navigate(['/book-list']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
