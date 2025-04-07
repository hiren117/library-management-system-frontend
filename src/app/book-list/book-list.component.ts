import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  errorMessage: string = '';

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }  // ✅ Inject Router properly

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    console.log("Loading books...");
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        this.errorMessage = 'Error Fetching Books';
        console.error(error);
      }
    );
  }

  deleteBook(id: number | undefined): void {
    if (!id) return;  // ✅ Ensure `id` is defined before deleting

    this.bookService.deleteBook(id).subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== id);  // ✅ Correct filter logic
        setTimeout(() => this.loadBooks(), 500);  // ✅ Wait 500ms before reloading
        // this.router.navigate(['/book-list']);
      },
      (error) => {
        console.error('Error deleting book', error);
      }
    );
  }

  editBook(id: number | undefined): void {
    if (!id) return;  // ✅ Ensure `id` is defined before navigating

    this.router.navigate(['/book-form', id]);  // ✅ Use router correctly
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
