import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ParcelaInt } from 'src/interfaces/ParcelaInt';

@Injectable({
  providedIn: 'root',
})
export class ParcelaService {
  private rota: string = `${environment.baseApiUrl}parcela/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ParcelaInt[]> {
    return this.http.get<ParcelaInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<ParcelaInt> {
    return this.http.get<ParcelaInt>(`${this.rota}${id}`);
  }

  getByConta(idCon: number): Observable<ParcelaInt[]> {
    return this.http.get<ParcelaInt[]>(`${this.rota}getByConta/${idCon}`);
  }

  save(parcela: ParcelaInt): Observable<ParcelaInt> {
    return this.http.post<ParcelaInt>(`${this.rota}save`, parcela);
  }

  update(parcela: ParcelaInt, id: number): Observable<ParcelaInt> {
    return this.http.put<ParcelaInt>(`${this.rota}${id}`, parcela);
  }

  delete(id: number) {
    return this.http.delete(`${this.rota}${id}`);
  }
}
