import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '../../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
  imports: [FormsModule,CommonModule]
})
export class SignupComponent {
  name = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(private authService: AuthService) {}

  signup() {
    if (!this.name || !this.username || !this.email || !this.password) {
      this.message = 'Vă rugăm să completați toate câmpurile.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Parolele nu coincid!';
      return;
    }

    const newUser: User = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      avatar: 'assets/images/Default_Avatar.png' // avatar implicit
    };

    const success = this.authService.signup(newUser);

    if (success) {
      this.message = 'Înregistrare reușită! Puteți să vă autentificați.';
      // resetează câmpurile
      this.name = '';
      this.username = '';
      this.email = '';
      this.password = '';
    } else {
      this.message = 'Username sau email deja existent!';
    }
  }
}
