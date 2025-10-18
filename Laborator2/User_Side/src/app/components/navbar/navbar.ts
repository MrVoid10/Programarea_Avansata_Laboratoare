import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  user: any = null;
  darkMode = false;
  private authSub: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscribe la schimbările de user
    this.authSub = this.authService.user$.subscribe(u => {
      this.user = u;
    });

    // 1️⃣ Verifică tema salvată sau preferința sistemului
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true'
      ? true
      : savedMode === 'false'
        ? false
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 2️⃣ Aplică tema imediat
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
    this.applyTheme();
  }

  applyTheme() {
    if (this.darkMode) {
      // document.body.style.backgroundColor = 'var(--bg-dark)';
      // document.body.style.color = 'var(--text-light)';
      document.body.classList.add('dark-mode');
    } else {
            document.body.classList.remove('dark-mode');
      // document.body.style.backgroundColor = 'var(--bg-light)';
      // document.body.style.color = 'var(--text-dark)';
    }
  }

  logout() {
    this.authService.logout();  // authService va notifica navbar-ul
  }

  ngOnDestroy() {
    if (this.authSub) this.authSub.unsubscribe();
  }
}
