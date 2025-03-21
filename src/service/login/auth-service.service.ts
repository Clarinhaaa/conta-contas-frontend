import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginInt } from 'src/interfaces/LoginInt';
import { UsuarioInt } from 'src/interfaces/UsuarioInt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private rota = `${environment.baseApiUrl}auth/login`;

  constructor(private http: HttpClient) {}

  login(login: LoginInt): Observable<any> {
    return this.http.post(this.rota, login);
  }

  salvarUsuario(usuario: UsuarioInt): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getLoggedUsuario(): UsuarioInt | null {
    const usu = localStorage.getItem('usuario');
    return usu ? JSON.parse(usu) : null;
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }
}
