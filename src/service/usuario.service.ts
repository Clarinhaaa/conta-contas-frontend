import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UsuarioInt } from 'src/interfaces/UsuarioInt';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private rota: string = `${environment.baseApiUrl}usuario/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UsuarioInt[]> {
    return this.http.get<UsuarioInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<UsuarioInt> {
    return this.http.get<UsuarioInt>(`${this.rota}${id}`)
  }

  save(usuario: UsuarioInt): Observable<UsuarioInt> {
    return this.http.post<UsuarioInt>(`${this.rota}save`, usuario);
  }

  update(usuario: UsuarioInt, id: number): Observable<UsuarioInt> {
    return this.http.put<UsuarioInt>(`${this.rota}${id}`, usuario);
  }

  delete(id: number) {
    return this.http.delete(`${this.rota}${id}`);
  }
}
