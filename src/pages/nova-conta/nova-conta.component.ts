import { Component } from '@angular/core';
import { ContaInt } from 'src/interfaces/ContaInt';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent {
  private tipoForm!: string;

  submit(conta: ContaInt) {
    console.log("Formulário enviado");
  }
}
