import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FormContaComponent } from 'src/components/form-conta/form-conta.component';
import { NovaContaComponent } from 'src/pages/nova-conta/nova-conta.component';
import { EditarContaComponent } from 'src/pages/editar-conta/editar-conta.component';
import { CadastroComponent } from 'src/pages/cadastro/cadastro.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { VisualizarContaComponent } from 'src/pages/visualizar-conta/visualizar-conta.component';
import { ParcelarComponent } from 'src/pages/parcelar/parcelar.component';
import { VerParcelasComponent } from 'src/pages/ver-parcelas/ver-parcelas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormContaComponent,
    NovaContaComponent,
    EditarContaComponent,
    CadastroComponent,
    LoginComponent,
    VisualizarContaComponent,
    ParcelarComponent,
    VerParcelasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
