import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/pages/cadastro/cadastro.component';
import { EditarContaComponent } from 'src/pages/editar-conta/editar-conta.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { NovaContaComponent } from 'src/pages/nova-conta/nova-conta.component';
import { VisualizarContaComponent } from 'src/pages/visualizar-conta/visualizar-conta.component';
import { AuthGuard } from 'src/service/login/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'novaConta',
    component: NovaContaComponent,
    canActivate: [AuthGuard],
  },
  { path: 'editarConta/:id', component: EditarContaComponent },
  { path: 'detalhesConta/:id', component: VisualizarContaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
