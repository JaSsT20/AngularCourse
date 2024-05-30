import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { DireccionService } from '../../../servicios/direccion.service';
import { Direccion } from '../../../models/direccion';
import { formatDate } from '../../../utils/formatDate';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-direcciones-form',
  templateUrl: './direcciones-form.component.html',
  styleUrl: './direcciones-form.component.css'
})
export class DireccionesFormComponent {
  formulario : FormGroup;
  clientes: Observable<Cliente[]> = new Observable<Cliente[]>();
  direccion: Direccion | undefined;
  inputSearch: FormControl;

  constructor(private fb: FormBuilder, private direccionesService: DireccionService, private clienteService: ClientesService) {
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
      createAt: ['', Validators.required],
      clienteId: [0, Validators.required]
    });
  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    console.info(this.formulario.value);
    console.info(this.formulario.valid);
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
          createAt: dirEncontrada.createAt,
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
    this.clientes = this.clienteService.getClientes();
  }
}
