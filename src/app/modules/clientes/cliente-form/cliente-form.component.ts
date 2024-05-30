import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../servicios/clientes.service';
import { formatDate }  from '../../../utils/formatDate';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  formulario: FormGroup;
  cliente: Cliente | undefined;
  inputSearch: FormControl;

  constructor(private fb: FormBuilder, private clientesService: ClientesService) {
    this.inputSearch = this.fb.control(0);
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate: ['', Validators.required],
      createAt: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required],
    });
  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    console.info(this.formulario.value);
    console.info(this.formulario.valid);
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
          createAt: formatDate(clienteEncontrado.createAt),
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
