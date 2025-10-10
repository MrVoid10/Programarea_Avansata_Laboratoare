import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { SignupComponent } from './components/signup/signup';
import { ListaCamereComponent } from './pages/lista-camere/lista-camere';
import { CameraDetaliiComponent } from './pages/camera-detalii/camera-detalii';
import { ServiciiComponent } from './pages/servicii/servicii';
import { ContactComponent } from './pages/contact/contact';
import { GalerieComponent } from './pages/galerie/galerie';


import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'logare', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'inregistrare', component: SignupComponent },
  
  { path: 'camere', component: ListaCamereComponent },
  { path: 'detalii/camera/:id', component: CameraDetaliiComponent },
  { path: 'servicii', component: ServiciiComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: 'home' } // Asta la urma de tot
];