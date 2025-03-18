import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.css']
})
export class FormContaComponent {
  @Input() tipoForm!: string;
}
