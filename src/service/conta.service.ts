import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContaInt } from 'src/interfaces/ContaInt';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  private rota: string = `${environment.baseApiUrl}conta/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ContaInt[]> {
    return this.http.get<ContaInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<ContaInt> {
    return this.http.get<ContaInt>(`${this.rota}${id}`);
  }

  getByUsuario(idUsu: number): Observable<ContaInt[]> {
    return this.http.get<ContaInt[]>(`${this.rota}getByUsuario/${idUsu}`);
  }

  save(conta: ContaInt): Observable<ContaInt> {
    return this.http.post<ContaInt>(`${this.rota}save`, conta);
  }

  update(conta: ContaInt, id: number): Observable<ContaInt> {
    return this.http.put<ContaInt>(`${this.rota}${id}`, conta);
  }

  delete(id: number) {
    return this.http.delete(`${this.rota}${id}`);
  }
}
