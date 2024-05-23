import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../servicios/direccion.service';

@Component({
  selector: 'app-direccion',
  standalone: false,
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  listaDirecciones: Observable<Direccion[]> = new Observable<Direccion[]>();

  constructor( private _direccionService: DireccionService) { }

  ngOnInit() {
    this.listaDirecciones = this._direccionService.getDirecciones();
  }

}
