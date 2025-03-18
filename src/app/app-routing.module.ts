import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarContaComponent } from 'src/pages/editar-conta/editar-conta.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { NovaContaComponent } from 'src/pages/nova-conta/nova-conta.component';
import { VisualizarContaComponent } from 'src/pages/visualizar-conta/visualizar-conta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novaConta', component: NovaContaComponent },
  { path: 'editarConta', component: EditarContaComponent },
  { path: 'detalhesConta', component: VisualizarContaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
