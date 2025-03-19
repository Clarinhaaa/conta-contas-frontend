import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.css'],
})
export class FormContaComponent implements OnInit {
  @Input() tipoForm!: string;
  @Input() visualizar!: boolean;

  protected contaForm!: FormGroup;
  protected dataAtual: Date = new Date();

  ngOnInit(): void {
    console.log(this.tipoForm);
    this.contaForm = new FormGroup({
      idConta: new FormControl(null, []),
      descricaoConta: new FormControl({value: null, disabled: this.visualizar}, [Validators.required]),
      valorConta: new FormControl({value: null, disabled: this.visualizar}, [Validators.required]),
      dataVencimentoConta: new FormControl({value: null, disabled: this.visualizar}, [Validators.required]),
      dataPagamentoConta: new FormControl(null, []),
      tipoConta: new FormControl({value: null, disabled: this.visualizar}, [Validators.required]),
      statusConta: new FormControl(null, []),
      idUsuario: new FormControl(null, []),
      idCategoria: new FormControl({value: null, disabled: this.visualizar}, []),
    })
  }

  get descricao() {
    return this.contaForm.get('descricaoConta')!;
  }
  get valor() {
    return this.contaForm.get('valorConta')!;
  }
  get dataVencimento() {
    return this.contaForm.get('dataVencimentoConta')!;
  }
  get tipo() {
    return this.contaForm.get('tipoConta')!;
  }
}
