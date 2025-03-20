import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EnderecoInt } from 'src/interfaces/EnderecoInt';
import { TelefoneInt } from 'src/interfaces/TelefoneInt';
import { UsuarioInt } from 'src/interfaces/UsuarioInt';
import { EnderecoService } from 'src/service/endereco.service';
import { TelefoneService } from 'src/service/telefone.service';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  protected cadastroForm!: FormGroup;
  private regex: string = '^[0-9]*$';
  private idTel?: number;
  private idEnd?: number;

  constructor(
    private telService: TelefoneService,
    private endService: EnderecoService,
    private usuService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.cadastroForm = this.formBuilder.group({
      idUsuario: new FormControl(null, []),
      nomeUsuario: new FormControl(null, [Validators.required]),
      cpfUsuario: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.regex),
      ]),
      emailUsuario: new FormControl(null, [Validators.required]),
      senhaUsuario: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
      ]),

      idTelefone: new FormControl(null, []),
      numeroTelefone: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.regex),
      ]),
      descricaoTelefone: new FormControl(null, []),

      idEndereco: new FormControl(null, []),
      numeroCasa: new FormControl(null, [Validators.required]),
      rua: new FormControl(null, [Validators.required]),
      bairro: new FormControl(null, [Validators.required]),
      cidade: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.regex),
      ]),
    });
  }

  onSubmit() {
    //TODO: Cadastrar o telefone e endereço antes de usuário, para pegar o id dos dois e botar lá
    if (this.cadastroForm.invalid) return;

    const form = this.cadastroForm.value;

    const tel: TelefoneInt = {
      numeroTelefone: form.numeroTelefone,
      descricaoTelefone: form.descricaoTelefone,
    };
    this.telService
      .save(tel)
      .subscribe((data) => (this.idTel = data.idTelefone));

    const end: EnderecoInt = {
      numeroCasa: form.numeroCasa,
      rua: form.rua,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      cep: form.cep,
    };
    this.endService
      .save(end)
      .subscribe((data) => (this.idEnd = data.idEndereco));

    const usu: UsuarioInt = {
      nomeUsuario: form.nomeUsuario,
      cpfUsuario: form.cpfUsuario,
      emailUsuario: form.emailUsuario,
      senhaUsuario: form.senhaUsuario,
      idTelefone: this.idTel,
      idEndereco: this.idEnd,
    };
    this.usuService.save(usu).subscribe({
      next: () => alert('Usuário cadastrado com sucesso!'),
      error: () => alert('Erro ao cadastrar usuário.'),
    });
  }

  get nome() {
    return this.cadastroForm.get('nomeUsuario')!;
  }
  get cpf() {
    return this.cadastroForm.get('cpfUsuario')!;
  }
  get email() {
    return this.cadastroForm.get('emailUsuario')!;
  }
  get senha() {
    return this.cadastroForm.get('senhaUsuario')!;
  }
  get numero() {
    return this.cadastroForm.get('numeroTelefone')!;
  }
  get numeroCasa() {
    return this.cadastroForm.get('numeroCasa')!;
  }
  get rua() {
    return this.cadastroForm.get('rua')!;
  }
  get bairro() {
    return this.cadastroForm.get('bairro')!;
  }
  get cidade() {
    return this.cadastroForm.get('cidade')!;
  }
  get estado() {
    return this.cadastroForm.get('estado')!;
  }
  get cep() {
    return this.cadastroForm.get('cep')!;
  }
}
