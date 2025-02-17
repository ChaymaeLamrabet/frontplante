import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
  ) {
  }

  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['articles']);
    }
  }

  register() {
    return this.router.navigate(['auth/register']);
  }
}
