import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:yourpassword'), // Replace with actual credentials
      'Content-Type': 'application/json'
    });
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, user); //, { headers: this.getAuthHeaders() removed becasue in spring Security we have allowed unauthenticated access to this end points
  }
  // not recomanded :
  // getUserById(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  // }
  loginUser(credentials: { userName: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
