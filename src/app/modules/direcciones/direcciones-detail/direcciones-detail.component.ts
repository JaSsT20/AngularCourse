import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direcciones-detail',
  standalone: false,
  templateUrl: './direcciones-detail.component.html',
  styleUrl: './direcciones-detail.component.css'
})
export class DireccionesDetailComponent {
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

  listaFiltrada: Direccion[] = [];
  direccion: Direccion | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['clienteId']) {
        const clienteId = +params['clienteId'];
        this.listaFiltrada = this.direcciones.filter(direccion => direccion.clienteId === clienteId);
      } 
      else if (params['id']){
        const direccionId = +params['id'];
        const direccionEncontrada = this.direcciones.find(direccion => direccion.addressId === direccionId);
        if(direccionEncontrada) {
          this.direccion = direccionEncontrada;
        }
      }
    });
  }
}