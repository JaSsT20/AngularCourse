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
  listaDirecciones: Direccion[] = [];

  constructor( private _direccionService: DireccionService) { }

  ngOnInit() {
    this.cargarDirecciones();
  }

  cargarDirecciones() {
    this._direccionService.getDirecciones().subscribe({
      next: (direcciones) => {
        this.listaDirecciones = direcciones;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  // updateEstado(direccionId : number) {
  //   this._direccionService.updateDireccion(direccionId);
  //   this.cargarDirecciones();
  // }
}
