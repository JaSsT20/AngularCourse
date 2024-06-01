import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../servicios/clientes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css'
})
export class ClientesDetailComponent {
  cliente: Cliente = new Cliente();

  constructor(private routeManager: ActivatedRoute, private clientesService: ClientesService) {

  }

  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      if (params['id']) {
        this.clientesService.getClienteById(+params['id']).subscribe({
          next: (value) => {
            if(value){
              this.cliente = value;
            }
          },
          error: (error) => {
            console.error(error);
          }
        })
      }
    });
  }

}
