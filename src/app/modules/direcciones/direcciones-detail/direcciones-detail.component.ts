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

  listaFiltrada: Observable<Direccion[]> | null = null;
  direccion: Observable<Direccion | undefined> | null = null;

  constructor(private route: ActivatedRoute, private _direccionesService: DireccionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['clienteId']) {
        this.listaFiltrada = this._direccionesService.getDireccionesDeCliente(+params['clienteId']);
      } 
      else if (params['id']) {
        this.direccion = this._direccionesService.getDireccionById(+params['id']);
      }
    });
  }
}
