import { ExtraOptions, Routes } from '@angular/router';
import { GalleryComponent } from './view/gallery/gallery.component';
import { GalleryHComponent } from './view/gallery-h/gallery-h.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./view/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'galeria',
    component: GalleryComponent,
  },
  { path: 'galeriah', component: GalleryHComponent },
];
