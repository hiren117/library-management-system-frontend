import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books'; // Backend URL

  constructor(private http: HttpClient) { }

  // Function to get authentication headers
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:yourpassword'), // Replace with actual credentials
      'Content-Type': 'application/json'
    });
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl, { headers: this.getAuthHeaders() });
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book, { headers: this.getAuthHeaders() });
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${id}`, book, { headers: this.getAuthHeaders() });
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
