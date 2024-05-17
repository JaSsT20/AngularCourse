import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
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
}
