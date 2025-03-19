import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FormContaComponent } from 'src/components/form-conta/form-conta.component';
import { NovaContaComponent } from 'src/pages/nova-conta/nova-conta.component';
import { EditarContaComponent } from 'src/pages/editar-conta/editar-conta.component';
import { VisualizarContaComponent } from 'src/pages/visualizar-conta/visualizar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormContaComponent,
    NovaContaComponent,
    EditarContaComponent,
    VisualizarContaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
