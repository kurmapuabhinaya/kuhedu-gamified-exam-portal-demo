import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

  login() {

    if(this.username === 'admin' && this.password === '1234'){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.message = "Invalid Login Credentials";
    }

  }

}