import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContaInt } from 'src/interfaces/ContaInt';
import { ContaService } from 'src/service/conta.service';

@Component({
  selector: 'app-visualizar-conta',
  templateUrl: './visualizar-conta.component.html',
  styleUrls: ['./visualizar-conta.component.css'],
})
export class VisualizarContaComponent implements OnInit {
  protected conta!: ContaInt;

  constructor(
    private route: ActivatedRoute,
    private conService: ContaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conService.getById(id).subscribe((data) => (this.conta = data));
  }
}
