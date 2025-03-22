import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcelaInt } from 'src/interfaces/ParcelaInt';
import { ContaService } from 'src/service/conta.service';
import { ParcelaService } from 'src/service/parcela.service';

@Component({
  selector: 'app-ver-parcelas',
  templateUrl: './ver-parcelas.component.html',
  styleUrls: ['./ver-parcelas.component.css'],
})
export class VerParcelasComponent implements OnInit {
  protected listaParcelas!: ParcelaInt[];
  private idConta: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private parService: ParcelaService,
    private conService: ContaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.parService
      .getByConta(this.idConta)
      .subscribe((data) => (this.listaParcelas = data));
  }

  removeHandler(id: number) {
    if (confirm('Tem certeza que deseja excluir essa parcela?')) {
      this.parService.delete(id).subscribe({
        next: () => {
          alert('Parcela excluída com sucesso!');
          window.location.reload();
        },
        error: () => alert('Erro ao excluir a parcela.'),
      });
    } else {
      return;
    }
  }
}
