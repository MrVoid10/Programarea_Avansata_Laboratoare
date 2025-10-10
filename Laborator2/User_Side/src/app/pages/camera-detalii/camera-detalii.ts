interface CameraDisponibila {
  id: string;
  libera: boolean;
}

interface Camera {
  id: string;
  nume: string;
  pret: number;
  moneda: string;
  imagine: string;
  descriere: string;
  camereDisponibile: CameraDisponibila[];
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera-detalii',
  standalone: true,
  templateUrl: './camera-detalii.html',
  styleUrls: ['./camera-detalii.scss'],
  imports: [CommonModule]
})
export class CameraDetaliiComponent {
  camera: any = null;
  selectedCameraId: string | null = null;
  isLoggedIn = false;

  camere = [
    {
      id: 'standart',
      nume: 'Camera Standard',
      pret: 600,
      moneda: 'MDL',
      imagine: 'assets/images/camera-standart.jpg',
      descriere: 'Cameră confortabilă pentru o persoană sau cuplu, dotată cu un pat dublu, TV și baie proprie.',
      camereDisponibile: [
        { id: '101A', libera: true },
        { id: '101B', libera: false },
        { id: '102A', libera: true }
      ]
    },
    {
      id: 'standart_balcon',
      nume: 'Camera Standard cu Balcon',
      pret: 700,
      moneda: 'MDL',
      imagine: 'assets/images/camera-standart_balcon.jpg',
      descriere: 'Cameră luminoasă cu balcon privat și vedere spre grădină.',
      camereDisponibile: [
        { id: '103A', libera: true },
        { id: '103B', libera: true },
        { id: '104A', libera: false }
      ]
    },
    {
      id: 'junior',
      nume: 'Camera Junior',
      pret: 350,
      moneda: 'MDL',
      imagine: 'assets/images/camera-junior.jpg',
      descriere: 'Cameră economică, perfectă pentru o persoană care călătorește singură.',
      camereDisponibile: [
        { id: '105A', libera: false },
        { id: '105B', libera: true },
        { id: '106A', libera: true }
      ]
    },
    {
      id: 'familial',
      nume: 'Camera Familială',
      pret: 1500,
      moneda: 'MDL',
      imagine: 'assets/images/camera-familial.jpg',
      descriere: 'Ideală pentru familii — două paturi duble, zonă de relaxare și spațiu generos.',
      camereDisponibile: [
        { id: '107A', libera: true },
        { id: '107B', libera: false }
      ]
    },
    {
      id: 'vip',
      nume: 'Camera VIP',
      pret: 3000,
      moneda: 'MDL',
      imagine: 'assets/images/camera-vip.jpg',
      descriere: 'Suită luxoasă cu jacuzzi, balcon privat și vedere panoramică.',
      camereDisponibile: [
        { id: '201A', libera: true },
        { id: '201B', libera: false }
      ]
    },
    {
      id: 'aristocrat',
      nume: 'Camera Aristocrat',
      pret: 7000,
      moneda: 'MDL',
      imagine: 'assets/images/camera-aristocrat.jpg',
      descriere: 'Suită elegantă în stil clasic, cu mobilier din lemn masiv și baie spațioasă din marmură.',
      camereDisponibile: [
        { id: '301A', libera: true },
        { id: '301B', libera: true },
        { id: '301C', libera: false }
      ]
    },
    {
      id: 'monarch',
      nume: 'Camera Regală',
      pret: 12000,
      moneda: 'MDL',
      imagine: 'assets/images/camera-monarch.jpg',
      descriere: 'Cea mai luxoasă cameră din hotel, cu sală de baie privată, jacuzzi și sală de cină personală.',
      camereDisponibile: [
        { id: '401A', libera: true },
        { id: '401B', libera: false }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.camera = this.camere.find(c => c.id === id) || null;

    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
  }

  selectCamera(c: CameraDisponibila) {
    if (c.libera) {
      this.selectedCameraId = c.id;
    }
  }

  faRezervare() {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Trebuie să fiți logat pentru a face o rezervare!');
      return;
    }
  
    if (!this.camera || !this.camera.camereDisponibile) return;
  
    let cameraAleasa: CameraDisponibila | undefined;
  
    if (this.selectedCameraId) {
      cameraAleasa = this.camera.camereDisponibile.find(
        (c: CameraDisponibila) => c.id === this.selectedCameraId && c.libera
      );
      if (!cameraAleasa) {
        alert('Camera selectată nu este liberă!');
        return;
      }
    } else {
      cameraAleasa = this.camera.camereDisponibile.find(
        (c: CameraDisponibila) => c.libera
      );
      if (!cameraAleasa) {
        alert(`Toate camerele din categoria ${this.camera.nume} sunt ocupate!`);
        return;
      }
    }
  
    cameraAleasa.libera = false;
    alert(`Rezervare efectuată pentru ${this.camera.nume} — Camera ${cameraAleasa.id}`);
    this.selectedCameraId = null;
  }

}
