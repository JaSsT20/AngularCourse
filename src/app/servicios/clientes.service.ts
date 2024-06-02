import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseUrl: string = 'https://report-api.somee.com/api'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }

  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${clienteId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  updateCliente(cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }
}
