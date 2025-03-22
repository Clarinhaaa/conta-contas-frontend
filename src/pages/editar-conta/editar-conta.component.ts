import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaInt } from 'src/interfaces/ContaInt';
import { ContaService } from 'src/service/conta.service';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.css'],
})
export class EditarContaComponent implements OnInit {
  protected conta!: ContaInt;

  constructor(
    private route: ActivatedRoute,
    private conService: ContaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conService.getById(id).subscribe((data) => (this.conta = data));
  }

  submit(conta: ContaInt) {
    const id = this.conta.idConta;

    this.conService.update(conta, id!).subscribe({
      next: () => {
        alert('Conta editada com sucesso!');
        this.router.navigate(['/home']);
      },
      error: () => 'Erro ao editar a conta.',
    });
  }
}
