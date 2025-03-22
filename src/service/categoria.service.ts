import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CategoriaInt } from 'src/interfaces/CategoriaInt';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private rota: string = `${environment.baseApiUrl}categoria/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoriaInt[]> {
    return this.http.get<CategoriaInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<CategoriaInt> {
    return this.http.get<CategoriaInt>(`${this.rota}${id}`);
  }

  save(categoria: CategoriaInt): Observable<CategoriaInt> {
    return this.http.post<CategoriaInt>(`${this.rota}save`, categoria);
  }

  update(categoria: CategoriaInt, id: number): Observable<CategoriaInt> {
    return this.http.put<CategoriaInt>(`${this.rota}${id}`, categoria);
  }

  delete(id: number) {
    return this.http.delete(`${this.rota}${id}`);
  }
}
