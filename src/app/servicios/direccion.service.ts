import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Direccion } from '../models/direccion';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  direcciones: Direccion[] = [
    {
      addressId: 1,
      alias: 'Casa',
      street: 'Calle 1',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zipCode: '12345',
      country: 'País 1',
      active: true,
      createAt: '2021-07-01',
      clienteId: 1
    },
    {
      addressId: 2,
      alias: 'Trabajo',
      street: 'Calle 2',
      city: 'Ciudad 2',
      state: 'Estado 2',
      zipCode: '54321',
      country: 'País 2',
      active: false,
      createAt: '2021-07-01',
      clienteId: 2
    },
    {
      addressId: 3,
      alias: 'Otro',
      street: 'Calle 3',
      city: 'Ciudad 3',
      state: 'Estado 3',
      zipCode: '67890',
      country: 'País 3',
      active: true,
      createAt: '2021-07-01',
      clienteId: 3
    },
    {
      addressId: 4,
      alias: 'Casa',
      street: 'Calle 4',
      city: 'Ciudad 4',
      state: 'Estado 4',
      zipCode: '09876',
      country: 'País 4',
      active: false,
      createAt: '2021-07-01',
      clienteId: 4
    },
    {
      addressId: 5,
      alias: 'Trabajo',
      street: 'Calle 5',
      city: 'Ciudad 5',
      state: 'Estado 5',
      zipCode: '54321',
      country: 'País 5',
      active: true,
      createAt: '2021-07-01',
      clienteId: 5
    }
  ]

  constructor() { }

  getDirecciones(): Observable<Direccion[]> {
    localStorage.getItem('direcciones') ? this.direcciones = JSON.parse(localStorage.getItem('direcciones') || '{}') : this.direcciones;
    return of(this.direcciones);
  }

  getDireccionById(id: number): Observable<Direccion | undefined> {
    const direccion = this.direcciones.find(direccion => direccion.addressId === id);
    return of(direccion);
  }

  getDireccionesDeCliente(clienteId: number): Observable<Direccion[]> {
    localStorage.getItem('direcciones') ? this.direcciones = JSON.parse(localStorage.getItem('direcciones') || '{}') : this.direcciones;
    const direcciones = this.direcciones.filter(direccion => direccion.clienteId === clienteId);
    return of(direcciones);
  }

  createDireccion(direccion: Direccion): Observable<Direccion> {
    const id = this.direcciones.length + 1;
    direccion.addressId = id;
    this.direcciones.push(direccion);
    return of(direccion);
  }

  updateDireccion(direccionId: number): Observable<Direccion | undefined> | undefined {
    const direccion = this.direcciones.find(direccion => direccion.addressId === direccionId);
    if (direccion) {
      direccion.active = !direccion.active;
      localStorage.setItem('direcciones', JSON.stringify(this.direcciones));
      return of(direccion);
    }
    return undefined;
  }
}
