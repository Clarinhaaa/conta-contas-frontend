import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EnderecoInt } from 'src/interfaces/EnderecoInt';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  private rota: string = `${environment.baseApiUrl}endereco/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<EnderecoInt[]> {
    return this.http.get<EnderecoInt[]>(`${this.rota}getAll`);
  }

  getById(id: number): Observable<EnderecoInt> {
    return this.http.get<EnderecoInt>(`${this.rota}${id}`);
  }

  save(endereco: EnderecoInt): Observable<EnderecoInt> {
    return this.http.post<EnderecoInt>(`${this.rota}save`, endereco);
  }

  update(endereco: EnderecoInt, id: number): Observable<EnderecoInt> {
    return this.http.put<EnderecoInt>(`${this.rota}${id}`, endereco);
  }

  delete(id: number) {
    return this.http.delete(`${this.rota}${id}`);
  }
}
