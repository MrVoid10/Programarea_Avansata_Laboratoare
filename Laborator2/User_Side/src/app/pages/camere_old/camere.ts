import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camere',
  templateUrl: './camere.html',
  styleUrls: ['./camere.scss']
})
export class CamereComponent implements AfterViewInit {
  camere = [
    { id: '118B', nume: 'Camera 118B', pret: 350, moneda: "MDL", imagine: 'assets/images/camera-118B.jpg' },
    { id: '119A', nume: 'Camera 119A', pret: 400, moneda: "MDL", imagine: 'assets/images/camera-119A.jpg' },
    { id: '120C', nume: 'Camera 120C', pret: 450, moneda: "MDL", imagine: 'assets/images/camera-120C.jpg' }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const container = document.getElementById('camere-container');
    if (!container) return;

    this.camere.forEach(camera => {
      const card = document.createElement('div');
      card.className = 'camera-card';

      // Imagine
      const img = document.createElement('img');
      img.src = camera.imagine;
      img.alt = camera.nume;
      img.className = 'camera-img';
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => this.goToCamera(camera.id));

      // Info nume + pret
      const info = document.createElement('div');
      info.className = 'camera-info';
      info.innerHTML = `<span class="camera-nume">${camera.nume}</span> - <span class="camera-pret">${camera.pret} ${camera.moneda}</span>`;

      // Buton "Afla mai multe"
      const button = document.createElement('button');
      button.className = 'btn afla-mai-multe';
      button.innerText = 'Afla mai multe';
      button.addEventListener('click', () => this.goToCamera(camera.id));

      // Adaugă toate în card
      card.appendChild(img);
      card.appendChild(info);
      card.appendChild(button);

      container.appendChild(card);
    });
  }

  goToCamera(id: string) {
    this.router.navigate(['/camere', id]);
  }
}
