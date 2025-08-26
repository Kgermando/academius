import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Academius - Ensemble pour un avenir meilleur' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent, title: 'Nos Services - Academius' },
  { path: 'about', component: AboutComponent, title: 'À Propos - Academius' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Academius' },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route pour les 404
];
