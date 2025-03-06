import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',

  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent implements OnInit {
  book = { title: '', author: '', isbn: '', publishedYear: 0 }; // Removed `id` optional
  isEdit = false;
  bookId?: number; // Store book ID only for editing

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.bookId = Number(id); // Store the book ID
      this.bookService.getBookById(this.bookId).subscribe((data) => {
        this.book = data;
      });
    }
  }

  saveBook(): void {
    if (this.isEdit && this.bookId) {
      this.bookService.updateBook(this.bookId, this.book).subscribe(
        () => {
          console.log('Book updated successfully');
          this.router.navigate(['/book-list']); // Redirect after saving
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
    } else {
      this.bookService.addBook(this.book).subscribe(
        () => {
          console.log('Book added successfully');
          this.router.navigate(['/book-list']); // Redirect after saving
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
    }
  }
}
