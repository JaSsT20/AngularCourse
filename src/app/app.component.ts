import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { ClientesModule } from './modules/clientes/clientes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule, DireccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soy Levid';
}
