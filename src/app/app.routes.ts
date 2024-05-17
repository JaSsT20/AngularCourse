import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./modules/direcciones/direcciones.module').then(m => m.DireccionesModule)
  }
];
