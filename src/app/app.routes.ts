import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./view/home/home').then((m) => m.Home),
  },
  {
    path: 'alojamiento',
    loadComponent: () =>
      import('./view/alojamiento/alojamiento').then((m) => m.Alojamiento),
  },
  {
    path: 'alojamiento/planta-baja',
    loadComponent: () =>
      import('./shared/deptopb/deptopb').then((m) => m.Deptopb),
  },
  {
    path: 'alojamiento/primer-piso',
    loadComponent: () =>
      import('./shared/deptoff/deptoff').then((m) => m.Deptoff),
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./view/about/about').then((m) => m.About),
  },
];
