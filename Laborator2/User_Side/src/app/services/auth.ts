import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  usersData: User[] = [];

  constructor() {
    // Încarcă utilizatorii din localStorage sau folosește fallback-ul implicit
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.usersData = JSON.parse(savedUsers);
    } else {
      this.usersData = [
        { name: 'mihai', username: 'mihai', email: 'mihai@gmail.com', password: '1234' },
        { name: 'Andrei', username: 'andrei', email: 'andrei@mail.ru', password: 'abcd' },
        { name: 'Admin', username: 'admin', email: 'admin@site.com', password: 'admin' }
      ];
      localStorage.setItem('users', JSON.stringify(this.usersData));
    }

    // Verifică dacă există un user logat
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this._user.next(JSON.parse(savedUser));
    }
  }

  /** Autentificare */
  login(user: User): boolean {
    const foundUser = this.usersData.find(
      u => (u.username === user.username || u.email === user.email) && u.password === user.password
    );
  
    if (foundUser) {
      this._user.next(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
  
    return false;
  }
  

  /** Înregistrare */
  signup(newUser: User): boolean {
    // verifică dacă username-ul sau email-ul există deja
    if (this.usersData.some(u => u.username === newUser.username || u.email === newUser.email)) {
      return false;
    }

    this.usersData.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.usersData));
    return true;
  }

  /** Logout */
  logout() {
    localStorage.removeItem('user');
    this._user.next(null);
  }

  /** Returnează utilizatorul logat curent */
  get currentUser(): User | null {
    return this._user.value;
  }
}
