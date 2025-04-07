import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  onLogin() {
    // Here, you will call the backend API for authentication (to be implemented later)
    // Clear any previous error messages
    this.errorMessage = '';

    // Create login payload
    const loginData = {
      userName: this.userName,
      password: this.password
    };
    this.userService.loginUser(loginData).subscribe({
      next: (response: any) => {
        console.log('login in loginUser', response);
        localStorage.setItem('token', response.token); // store JWT token
        this.router.navigate(['/home']); // redirect after login which is home page
      },
      error: (error) => {
        console.log('login failed loginUser', error);
        if (error.status === 401) {
          this.errorMessage = error.error?.message || 'Invalid Username or password';
        } else {
          this.errorMessage = 'Something went wrong try again!';
        }
      }
    })

    console.log('onLogin Logging in with:', this.userName, this.password);
  }
  onSignUp() {
    // Here, you will call the backend API for authentication (to be implemented later)
    console.log('Logging in with:', this.userName, this.password);
    this.router.navigate(['/signup']); // Redirect to home page after login
  }
}
