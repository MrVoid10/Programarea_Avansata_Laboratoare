import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [CommonModule,RouterModule]
})
export class FooterComponent {
  contact = {
    email: 'adry4work@gmail.com',
    telefon: '+373 784 00 000'
  };

  social = [
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', url: 'https://www.facebook.com/Adry.baban', alt: 'Facebook' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg', url: 'https://www.instagram.com/mr_void26', alt: 'Instagram' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', url: 'https://github.com/MrVoid10', alt: 'GitHub' }
  ];

  legaturi = [
    { label: 'Despre', url: '#' },
    { label: 'Politica de confidențialitate', url: '#' }
  ];

  anulCurent = new Date().getFullYear();

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Numărul ${text} a fost copiat în clipboard!`);
    }).catch(err => {
      console.error('Eroare la copierea în clipboard:', err);
    });
  }
}
