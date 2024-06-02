import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDetailComponent } from './direcciones-detail/direcciones-detail.component';
import { DireccionesFormComponent } from './direcciones-form/direcciones-form.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionesDetailComponent
  },
  {
    path: 'cliente/:clienteId',
    component: DireccionesDetailComponent
  },
  {
    path: 'form',
    component: DireccionesFormComponent
  },
  {
    path: 'form/:id',
    component: DireccionesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
