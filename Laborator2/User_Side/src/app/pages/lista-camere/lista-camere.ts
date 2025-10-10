import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-camere',
  templateUrl: './lista-camere.html',
  styleUrls: ['./lista-camere.scss'],
  imports: [CommonModule]
})
export class ListaCamereComponent {
  camere = [
    { id: 'standart', nume: 'Camera Standart', pret: 600, moneda: 'MDL', imagine: 'assets/images/camera-standart.jpg' },
    { id: 'standart_balcon', nume: 'Camera Standart cu balcon', pret: 700, moneda: 'MDL', imagine: 'assets/images/camera-standart_balcon.jpg' },
    { id: 'junior', nume: 'Camera Junior', pret: 350, moneda: 'MDL', imagine: 'assets/images/camera-junior.jpg' },
    { id: 'familial', nume: 'Camera Familial', pret: 1500, moneda: 'MDL', imagine: 'assets/images/camera-familial.jpg' },
    { id: 'vip', nume: 'Camera VIP', pret: 3000, moneda: 'MDL', imagine: 'assets/images/camera-vip.jpg' },
    { id: 'aristocrat', nume: 'Camera Aristocrat', pret: 7000, moneda: 'MDL', imagine: 'assets/images/camera-aristocrat.jpg' },
    { id: 'monarch', nume: 'Camera Regal', pret: 12000, moneda: 'MDL', imagine: 'assets/images/camera-monarch.jpg' }
  ];

  constructor(private router: Router) {}

  goToCamera(id: string) {
    if (!id) return;
    this.router.navigate([`/detalii/camera/${id}`]);
  }
}
