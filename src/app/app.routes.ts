import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('./features/playground/playground.routes')
        .then(m => m.PLAYGROUND_ROUTES),
  },
];
