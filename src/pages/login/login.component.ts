import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInt } from 'src/interfaces/LoginInt';
import { AuthService } from 'src/service/login/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  protected loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      emailLogin: new FormControl(null, [Validators.required]),
      senhaLogin: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const login: LoginInt = {
      email: this.loginForm.get('emailLogin')?.value,
      senha: this.loginForm.get('senhaLogin')?.value,
    };

    this.authService.login(login).subscribe({
      next: (usuario) => {
        this.authService.salvarUsuario(usuario);
        this.router.navigate(['/home']);
        alert('Login efetuado com sucesso!');
      },
      error: () => alert('Erro ao efetuar login.'),
    });
  }

  get email() {
    return this.loginForm.get('emailLogin');
  }
  get senha() {
    return this.loginForm.get('senhaLogin');
  }
}
