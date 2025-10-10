import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  statusMsg = '';

  trimiteMesaj() {
    if (!this.name || !this.email || !this.message) {
      this.statusMsg = 'Vă rugăm să completați toate câmpurile.';
      return;
    }

    const newMsg = {
      name: this.name,
      email: this.email,
      message: this.message,
      date: new Date().toLocaleString()
    };

    // ✅ Salvăm mesajul în localStorage
    const savedMsgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    savedMsgs.push(newMsg);
    localStorage.setItem('contactMessages', JSON.stringify(savedMsgs));

    // Simulăm trimiterea mesajului
    console.log('Mesaj salvat local:', newMsg);

    this.statusMsg = 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.';

    // Resetăm formularul
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
