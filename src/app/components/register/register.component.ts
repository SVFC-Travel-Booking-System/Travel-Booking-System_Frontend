import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Reset messages
    this.successMessage = null;
    this.errorMessage = null;

    // Basic validation
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Call AuthService register method
    this.authService.register({
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    }).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful!';
        this.errorMessage = null;

        // Clear form data
        this.user = {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Error:', error);
      }
    });
  }
}
