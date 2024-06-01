import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaClientes: Cliente[] = [];

  constructor(private _servicio : ClientesService) { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this._servicio.getClientes().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // updateEstado(clienteId : number) {
  //   this._servicio.updateCliente(clienteId);
  //   this.cargarClientes();
  // }
}
