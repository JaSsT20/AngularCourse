import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../servicios/clientes.service';
import { formatDate } from '../../../utils/formatDate';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  formulario: FormGroup;
  cliente: Cliente | undefined;
  inputSearch: FormControl;

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private routerManager: ActivatedRoute
  ) {
    this.inputSearch = this.fb.control(0);
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate: ['', Validators.required],
      createdAt: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required],
    });

    this.routerManager.params.subscribe((params) => {
      if(params['id']) {
        this.clientesService.getClienteById(+params['id']).subscribe({
          next: (value) => {
            if(value){
              this.cliente = value;
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
      const cliente = this.formulario.value;
      if (this.cliente) {
        this.clientesService.updateCliente(cliente).subscribe(() => {
          alert('Cliente actualizado');
        });
      } else {
        this.clientesService.createCliente(cliente).subscribe(() => {
          alert('Cliente creado');
        });
      }
    }
  }

  onSearch() {
    this.clientesService.getClienteById(this.inputSearch.value).subscribe(clienteEncontrado => {
      if (clienteEncontrado) {
        this.cliente = clienteEncontrado;
        this.formulario.patchValue({
          name: clienteEncontrado.name,
          lastName: clienteEncontrado.lastName,
          cedula: clienteEncontrado.cedula,
          birthDate: formatDate(clienteEncontrado.birthDate),
          createdAt: formatDate(clienteEncontrado.createdAt),
          email: clienteEncontrado.email,
          active: clienteEncontrado.active
        });
      } else {
        alert('Cliente no encontrado');
      }
    });
  }

  public getErrors(controlName: string, spanishName: string): string {
    const control = this.formulario.get(controlName);
    if (control && control.touched && control.invalid) {
      if (control.hasError('required')) {
        return `'${spanishName}' es requerido`;
      }
      else if (control.hasError('minlength')) {
        const minLength = control.getError('minlength').requiredLength;
        const currentLength = control.value.length;
        return `'${spanishName}' debe tener al menos ${minLength} caracteres [${currentLength}/${minLength}]`;
      }
      else if (control.hasError('maxlength')) {
        const maxLength = control.getError('maxlength').requiredLength;
        const currentLength = control.value.length;
        return `'${spanishName}' no debe exceder los ${maxLength} caracteres [${currentLength}/${maxLength}]`;
      }
      else if (control.hasError('email')) {
        return `El formato de '${spanishName}' es inválido`;
      }
    }
    return '';
  }
}
