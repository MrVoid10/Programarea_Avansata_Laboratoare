import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  src: string;
  descriere: string;
}

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.html',
  styleUrls: ['./galerie.scss'],
  imports: [CommonModule]
})
export class GalerieComponent {
  slides: Slide[] = [
    { src: 'assets/images/gallery/slide-1.jpg', descriere: 'Un client ce a testat camera standard' },
    { src: 'assets/images/gallery/slide-2.jpg', descriere: 'Un cuplu in camera de familie' },
    { src: 'assets/images/gallery/slide-3.jpg', descriere: 'Adolescenti in camera de familie' },
    { src: 'assets/images/gallery/slide-4.jpg', descriere: 'Coming Soon!!! Camera compacta de activitati temporare' }
  ];

  currentIndex: number = 0;

  // Merge la slide-ul anterior
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Merge la slide-ul următor
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Setează slide-ul la index-ul selectat
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
