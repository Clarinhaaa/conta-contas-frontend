import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContaInt } from 'src/interfaces/ContaInt';
import { ParcelaInt } from 'src/interfaces/ParcelaInt';
import { ContaService } from 'src/service/conta.service';
import { ParcelaService } from 'src/service/parcela.service';

@Component({
  selector: 'app-parcelar',
  templateUrl: './parcelar.component.html',
  styleUrls: ['./parcelar.component.css'],
})
export class ParcelarComponent implements OnInit {
  private conta: ContaInt | null = null;
  protected parcelaForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private parService: ParcelaService,
    private conService: ContaService
  ) {
    this.parcelaForm = this.formBuilder.group({
      idParcela: new FormControl(null, []),
      qtdParcelas: new FormControl(null, [Validators.required]),
      idConta: new FormControl(this.conta?.idConta, []),
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conService.getById(id).subscribe((data) => (this.conta = data));
  }

  onSubmit() {
    for (let i = 1; i <= this.parcelaForm.get('qtdParcelas')?.value; i++) {
      const par: ParcelaInt = {
        dataVencimentoParcela: this.conta?.dataVencimentoConta,
        numeroParcela: i,
        valorParcela:
          this.conta?.valorConta! / this.parcelaForm.get('qtdParcelas')?.value,
        statusParcela: 'Não paga',
        idConta: this.conta?.idConta,
      };

      this.parService.save(par).subscribe();
    }
  }

  get qtdParcelas() {
    return this.parcelaForm.get('qtdParcelas');
  }
}
