import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { ClientesService } from '../../servicios/clientes.service';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetailComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
