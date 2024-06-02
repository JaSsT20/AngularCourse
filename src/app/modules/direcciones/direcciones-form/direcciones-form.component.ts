import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { DireccionService } from '../../../servicios/direccion.service';
import { Direccion } from '../../../models/direccion';
import { ClientesService } from '../../../servicios/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direcciones-form',
  templateUrl: './direcciones-form.component.html',
  styleUrl: './direcciones-form.component.css'
})
export class DireccionesFormComponent {
  formulario : FormGroup;
  clientes: Cliente[] = [];
  direccion: Direccion | undefined;
  inputSearch: FormControl;

  constructor(
    private fb: FormBuilder, 
    private direccionesService: DireccionService, 
    private clienteService: ClientesService,
    private routerManager: ActivatedRoute
  ) {
    this.inputSearch = this.fb.control(0);
    this.getClientes();
    this.formulario = this.fb.group({
      alias: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      active: [true, Validators.required],
      createdAt: ['', Validators.required],
      clienteId: [0, Validators.required]
    });

    this.routerManager.params.subscribe((params) => {
      if(params['id']) {
        this.direccionesService.getDireccionById(+params['id']).subscribe({
          next: (value) => {
            if(value){
              this.direccion = value;
              this.formulario.patchValue(value)
            }
          },
          error: (error) => {
            console.error(error);
          }
        })
      }
    });

  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      const direccion = this.formulario.value;
      if (this.direccion) {
        this.direccionesService.updateDireccion(direccion).subscribe(() => {
          alert('Direccion actualizada');
        });
      } else {
        this.direccionesService.createDireccion(direccion).subscribe(() => {
          alert('Cliente creado');
        });
      }
    }
  }

  onSearch() {
    this.direccionesService.getDireccionById(this.inputSearch.value).subscribe(dirEncontrada => {
      if (dirEncontrada) {
        this.direccion = dirEncontrada;
        this.formulario.patchValue({
          alias: dirEncontrada.alias,
          street: dirEncontrada.street,
          city: dirEncontrada.city,
          state: dirEncontrada.state,
          zipCode: dirEncontrada.zipCode,
          country: dirEncontrada.country,
          active: dirEncontrada.active,
          createdAt: dirEncontrada.createdAt,
          clienteId: dirEncontrada.clienteId
        });
      } else {
        alert('Cliente no encontrado');
      }
    });
  }

  getErrors(controlName: string, spanishName: string): string {
    const control = this.formulario.get(controlName);
    if (
      control 
      && control.touched 
      && control.invalid
    ) {
      if (control.hasError('required')) {
        return `'${spanishName}' es requerido`;
      }
    }
    return '';
  }

  getClientes() {
    this.clienteService.getClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
