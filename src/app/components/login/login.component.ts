import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ensure to include the CSS file
})
export class LoginComponent {
  // Use a user object with email and password properties
  user = { email: '', password: '' };
  successMessage: string | null = null;
  errorMessage: string | null = null;
  loading: boolean = false; // To manage loading state

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true; // Start loading state
    this.errorMessage = null; // Reset any previous error messages

    this.authService.login(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.successMessage = 'Login successful!';
        this.router.navigate(['/']); // Redirect to home after successful login
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error(err); // Log the error for debugging
      },
      complete: () => {
        this.loading = false; // End loading state
      }
    });
  }
}
