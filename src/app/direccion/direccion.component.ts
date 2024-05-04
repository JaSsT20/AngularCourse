import { Component } from '@angular/core';
import { Direccion } from '../models/direccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {

  direcciones: Direccion[] = [
    {
      addressId: 0,
      alias: 'Casa',
      street: 'Calle 1',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zipCode: '12345',
      country: 'País 1',
      active: true,
      createAt: '2021-07-01',
      clienteId: 0
    },
    {
      addressId: 1,
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
  ]

}
