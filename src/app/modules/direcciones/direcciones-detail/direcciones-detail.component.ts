import { Component, OnInit } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DireccionService } from '../../../servicios/direccion.service';

@Component({
  selector: 'app-direcciones-detail',
  templateUrl: './direcciones-detail.component.html',
  styleUrls: ['./direcciones-detail.component.css']
})
export class DireccionesDetailComponent {

  listaFiltrada: Direccion[] | null = null;
  direccion: Direccion | undefined | null = null;

  constructor(private route: ActivatedRoute, private _direccionesService: DireccionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['clienteId']) {
        this._direccionesService.getDireccionesDeCliente(+params['clienteId']).subscribe({
          next: (direcciones) => {
            this.listaFiltrada = direcciones;
          },
          error: (error) => {
            console.error(error);
          }
        });
      } 
      else if (params['id']) {
        this._direccionesService.getDireccionById(+params['id']).subscribe({
          next: (direccion) => {
            this.direccion = direccion;
          },
          error: (error) => {
            console.error(error);
          }
        });
      }
    });
  }
}
