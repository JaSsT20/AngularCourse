import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
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
  
  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  getClienteById(clienteId : number): Observable<Cliente | undefined> {
    const foundCliente = this.clientes.find(cliente => cliente.clienteId == clienteId);
    return of(foundCliente);
  }
}
