import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  usersData: User[] = [
    { name: 'mihai', username: 'mihai', email: 'mihai@gmail.com', password: '1234' },
    { name: 'Andrei', username: 'andrei', email: 'andrei@mail.ru', password: 'abcd' },
    { name: 'Admin', username: 'admin', email: 'admin@site.com', password: 'admin' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  // login() {
  //   // Căutăm utilizatorul în baza de date/local array
  //   const foundUser = this.usersData.find(
  //     u => (u.username === this.username || u.email === this.username) &&
  //          u.password === this.password
  //   );
  
  //   if (foundUser) {
  //     // Notificăm AuthService cu user complet
  //     this.authService.login(foundUser);
  //     this.message = `Bun venit, ${foundUser.name}!`;
  //   } else {
  //     this.message = 'Utilizator sau parolă incorectă!';
  //   }
  // }

  login() {

    const loginUser: User = {
      name: '',
      username: this.username,
      email: this.username,
      password: this.password
    };

    const success = this.authService.login(loginUser);

    if (success) {
      this.message = `Bun venit!`;
      this.router.navigate(['/']);
    } else {
      this.message = 'Utilizator sau parolă incorectă!';
    }
  }

  goToSignup() {this.router.navigate(['/signup']);}

}
