import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TelefoneInt } from 'src/interfaces/TelefoneInt';

@Injectable({
  providedIn: 'root',
})
export class TelefoneService {
  private rota: string = `${environment.baseApiUrl}telefone/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TelefoneInt[]> {
    return this.http.get<TelefoneInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<TelefoneInt> {
    return this.http.get<TelefoneInt>(`${this.rota}${id}`);
  }

  save(telefone: TelefoneInt): Observable<TelefoneInt> {
    return this.http.post<TelefoneInt>(`${this.rota}save`, telefone);
  }

  update(telefone: TelefoneInt, id: number): Observable<TelefoneInt> {
    return this.http.put<TelefoneInt>(`${this.rota}${id}`, telefone);
  }

  delete(id: number) {
    return this.http.delete<TelefoneInt>(`${this.rota}${id}`);
  }
}
