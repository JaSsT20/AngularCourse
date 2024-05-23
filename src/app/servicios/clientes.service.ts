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
    localStorage.getItem('clientes') ? this.clientes = JSON.parse(localStorage.getItem('clientes') || '{}') : this.clientes;
    return of(this.clientes);
  }

  getClienteById(clienteId : number): Observable<Cliente | undefined> {
    localStorage.getItem('clientes') ? this.clientes = JSON.parse(localStorage.getItem('clientes') || '{}') : this.clientes;
    const foundCliente = this.clientes.find(cliente => cliente.clienteId == clienteId);
    return of(foundCliente);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    cliente.clienteId = this.clientes.length + 1;
    cliente.createAt = new Date();
    cliente.active = true;
    this.clientes.push(cliente);
    return of(cliente);
  }

  updateCliente(clienteId: number) : Observable<Cliente | undefined> {
    const foundCliente = this.clientes.find(cliente => cliente.clienteId == clienteId);
    if (foundCliente) {
      foundCliente.active = !foundCliente.active;
      localStorage.setItem('clientes', JSON.stringify(this.clientes));
      return of(foundCliente);
    }
    return of(undefined);
  }
}
