import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContaInt } from 'src/interfaces/ContaInt';
import { ContaService } from 'src/service/conta.service';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css'],
})
export class NovaContaComponent {
  constructor(private conService: ContaService, private router: Router) {}

  submit(conta: ContaInt) {
    this.conService.save(conta).subscribe({
      next: () => {
        alert('Conta cadastrada com sucesso!');
        this.router.navigate(['/home']);
      },
      error: () => alert('Erro ao cadastrar a conta.'),
    });
  }
}
