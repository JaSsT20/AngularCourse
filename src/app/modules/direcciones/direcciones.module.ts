import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDetailComponent } from './direcciones-detail/direcciones-detail.component';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDetailComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule
  ]
})
export class DireccionesModule { }
