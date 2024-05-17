import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionesModule } from './modules/direcciones/direcciones.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule, DireccionesModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soy Levid';
}
