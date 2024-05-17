import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css'
})
export class ClientesDetailComponent {
  clientes: Cliente[] = [
    {
      clienteId: 1,
      name: 'Levid',
      lastName: 'Tejada',
      cedula: '123456789',
      birthDate: new Date('1995-06-15'),
      createAt: new Date(),
      email: '',
      active: true,
      addresses: []
    },
    {
      clienteId: 2,
      name: 'Grey',
      lastName: 'Polanco',
      cedula: '123456789',
      birthDate: new Date('1995-06-15'),
      createAt: new Date(),
      email: '',
      active: false,
      addresses: []
    },
    {
      clienteId: 3,
      name: 'Elian',
      lastName: 'Garcia',
      cedula: '123456789',
      birthDate: new Date('1995-06-15'),
      createAt: new Date(),
      email: '',
      active: false,
      addresses: []
    },
    {
      clienteId: 4,
      name: 'Joseph',
      lastName: 'Garcia',
      cedula: '123456789',
      birthDate: new Date('1995-06-15'),
      createAt: new Date(),
      email: '',
      active: true,
      addresses: []
    },
    {
      clienteId: 5,
      name: 'Gregory',
      lastName: 'Suarez',
      cedula: '123456789',
      birthDate: new Date('1995-06-15'),
      createAt: new Date(),
      email: '',
      active: false,
      addresses: []
    }
  ]

  cliente : Cliente = new Cliente();

  constructor(private routeManager: ActivatedRoute) {
    this.routeManager.params.subscribe(params => {
      if(params['id']){
        const foundCliente = this.clientes.find(cliente => cliente.clienteId == params['id']);
        if (foundCliente) {
          this.cliente = foundCliente;
        }
      }
    });
  }
}
