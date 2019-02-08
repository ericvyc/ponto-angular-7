import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";

import {
  ListagemComponent,
  CadastroComponent,
  AtualizacaoComponent,
  AdminComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent
  ],
})
export class AdminModule { }
