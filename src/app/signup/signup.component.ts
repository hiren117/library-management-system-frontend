import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = { username: '', password: '', fullName: '', mobileNumber: 0, emailId: '', };
  isEdit = false;
  userId?: number;
  errorMessage: string = ''; // Variable to store error message

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.isEdit = true;
  //     this.userId = Number(id); // Store the book ID
  //     this.userService.getUserById(this.userId).subscribe((data) => {
  //       this.user = data;
  //     });
  //   }
  // }
  signup() {
    console.log('Signup button clicked');  // Debugging log
    console.log('User data:', this.user);

    this.errorMessage = ''; // Clear previous errors
    this.userService.addUser(this.user).subscribe(
      () => {
        console.log('User added successfully');
        alert('User registered successfully! Redirecting to login...');
        this.router.navigate(['/login']); // Redirect after successful signup
      },
      (error) => {
        console.error('Error adding user:', error);
        if (error.status === 400 && error.error) {
          this.errorMessage = error.error.error || 'username or Email already exists';
        } else {
          this.errorMessage = 'somthing went wrong plz try again !';
        }
      }
    );

    //console.log('Signing up with:', this.user);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
