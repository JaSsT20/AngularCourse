import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      clienteId: 0,
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
      clienteId: 1,
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
      clienteId: 2,
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
      clienteId: 3,
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
      clienteId: 4,
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
