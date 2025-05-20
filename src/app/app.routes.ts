import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./view/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./view/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
];
