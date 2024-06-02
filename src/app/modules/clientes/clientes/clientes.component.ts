import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
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

  updateEstado(clienteId: number) {
    const cliente = this.listaClientes.find(c => c.clienteId === clienteId);
    if (cliente) {
      cliente.active = !cliente.active;
      this._servicio.updateCliente(cliente).subscribe({
        next: () => {
          console.log('Estado actualizado');
        },
        error: (error) => {
          console.error('Error al actualizar el estado', error);
          cliente.active = !cliente.active;
        }
      });
    }
  }
}
