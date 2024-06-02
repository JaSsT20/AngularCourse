import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDetailComponent } from './direcciones-detail/direcciones-detail.component';
import { DireccionesFormComponent } from './direcciones-form/direcciones-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DireccionService } from '../../servicios/direccion.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from '../../servicios/clientes.service';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDetailComponent,
    DireccionesFormComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DireccionService,
    ClientesService
  ]
})
export class DireccionesModule { }
