import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ListagemComponent,
  CadastroComponent,
  AtualizacaoComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent
  ],
})
export class AdminModule { }
