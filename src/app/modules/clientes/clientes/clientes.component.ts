import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaClientes: Observable<Cliente[]> = new Observable<Cliente[]>();

  constructor(private _servicio : ClientesService) { }

  ngOnInit() {
    this.listaClientes = this._servicio.getClientes();
  }
}
