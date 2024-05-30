import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDetailComponent } from './direcciones-detail/direcciones-detail.component';
import { DireccionesFormComponent } from './direcciones-form/direcciones-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDetailComponent,
    DireccionesFormComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DireccionesModule { }
