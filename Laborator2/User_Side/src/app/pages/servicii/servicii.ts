// servicii.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Serviciu {
  nume: string;
  descriere: string;
  icon: string; // URL sau path la icon
}

@Component({
  selector: 'app-servicii',
  standalone: true,
  templateUrl: './servicii.html',
  styleUrls: ['./servicii.scss'],
  imports: [CommonModule, RouterModule]
})
export class ServiciiComponent {
  servicii: Serviciu[] = [
    {
      nume: 'Restaurant Gourmet',
      descriere: 'Savurați preparate internaționale și locale într-un decor elegant.',
      icon: 'assets/images/services/restaurant.jpg'
    },
    {
      nume: 'Piscină cu apă încălzită',
      descriere: 'Piscină interioară și exterioară cu apă încălzită pe tot parcursul anului.',
      icon: 'assets/images/services/piscina.jpg'
    },
    {
      nume: 'Spa & Wellness',
      descriere: 'Masaje, saună și tratamente de relaxare personalizate.',
      icon: 'assets/images/services/spa.jpg'
    },
    {
      nume: 'Servicii personalizate',
      descriere: 'Concierge, room service 24/7 și activități dedicate fiecărui oaspete.',
      icon: 'assets/images/services/personalizate.jpg'
    },
    {
      nume: 'Săli de conferință',
      descriere: 'Spații moderne echipate pentru întâlniri și evenimente corporative.',
      icon: 'assets/images/services/conferinta.jpg'
    },
  ];
}
