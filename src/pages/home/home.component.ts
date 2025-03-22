import { Component, OnInit } from '@angular/core';
import { ContaInt } from 'src/interfaces/ContaInt';
import { ContaService } from 'src/service/conta.service';
import { AuthService } from 'src/service/login/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  protected listaContas!: ContaInt[];

  constructor(
    private conService: ContaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const idUsu = this.authService.getLoggedUsuario()?.idUsuario;
    this.conService
      .getByUsuario(idUsu!)
      .subscribe((data) => (this.listaContas = data));
  }

  pagarHandler(id: number) {
    if (confirm('Você tem certeza que deseja pagar essa conta?')) {
      this.conService.pagar(id).subscribe({
        next: () => {
          alert('Conta paga com sucesso!');
          window.location.reload();
        },
        error: () => alert('Erro ao pagar a conta.'),
      });
    }
  }

  removeHandler(id: number) {
    if (confirm('Você tem certeza que deseja excluir essa conta?')) {
      this.conService.delete(id).subscribe({
        next: () => {
          alert('Conta excluída com sucesso!');
          window.location.reload();
        },
        error: () => alert('Erro ao excluir a conta.'),
      });
    } else {
      return;
    }
  }
}
