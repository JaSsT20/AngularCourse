import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Direccion } from '../models/direccion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private baseUrl = "https://report-api.somee.com/api"

  constructor(private http: HttpClient) { }

  getDirecciones(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(`${this.baseUrl}/addresses`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }

  getDireccionById(id: number): Observable<Direccion | undefined> {
    return this.http.get<Direccion>(`${this.baseUrl}/addresses/${id}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  getDireccionesDeCliente(clienteId: number): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(`${this.baseUrl}/addresses/getByCliente/${clienteId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }

  createDireccion(direccion: Direccion): Observable<Direccion> {
    return this.http.post<Direccion>(`${this.baseUrl}/addresses`, direccion).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  updateDireccion(direccion: Partial<Direccion>): Observable<Direccion> {
    return this.http.post<Direccion>(`${this.baseUrl}/addresses`, direccion).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }
}
