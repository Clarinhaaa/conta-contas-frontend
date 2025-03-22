import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CategoriaInt } from 'src/interfaces/CategoriaInt';
import { ContaInt } from 'src/interfaces/ContaInt';
import { UsuarioInt } from 'src/interfaces/UsuarioInt';
import { CategoriaService } from 'src/service/categoria.service';
import { AuthService } from 'src/service/login/auth-service.service';

@Component({
  selector: 'app-form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.css'],
})
export class FormContaComponent implements OnInit, OnChanges {
  @Input() isEditar!: boolean;
  @Input() isVisualizar!: boolean;
  @Input() contaEditar: ContaInt | null = null;
  @Output() onSubmit = new EventEmitter<ContaInt>();

  protected contaForm!: FormGroup;
  protected dataAtual: Date = new Date();
  protected listaCategorias!: CategoriaInt[];
  private idUsu?: number = this.authService.getLoggedUsuario()?.idUsuario;

  constructor(
    private formBuilder: FormBuilder,
    private catService: CategoriaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.catService.getAll().subscribe((data) => (this.listaCategorias = data));
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contaEditar'] && changes['contaEditar'].currentValue)
      this.initForm();
  }

  submit() {
    if (this.contaForm.invalid) {
      this.contaForm.reset();
      return;
    }

    console.log(this.contaForm.value);
    this.onSubmit.emit(this.contaForm.value);
  }

  initForm(): void {
    this.contaForm = this.formBuilder.group({
      idConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.idConta : null,
          disabled: this.isVisualizar,
        },
        []
      ),
      descricaoConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.descricaoConta : null,
          disabled: this.isVisualizar,
        },
        [Validators.required]
      ),
      valorConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.valorConta : null,
          disabled: this.isVisualizar,
        },
        [Validators.required]
      ),
      dataVencimentoConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.dataVencimentoConta : null,
          disabled: this.isVisualizar,
        },
        [Validators.required]
      ),
      dataPagamentoConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.dataPagamentoConta : null,
          disabled: this.isEditar || !this.isVisualizar,
        },
        []
      ),
      tipoConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.tipoConta : null,
          disabled: this.isVisualizar,
        },
        [Validators.required]
      ),
      statusConta: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.statusConta : null,
          disabled: this.isVisualizar,
        },
        []
      ),
      idUsuario: new FormControl(this.idUsu, []),
      idCategoria: new FormControl(
        {
          value: this.isEditar ? this.contaEditar?.idCategoria : null,
          disabled: this.isVisualizar,
        },
        []
      ),
    });
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
