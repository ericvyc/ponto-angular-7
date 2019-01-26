import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  ListagemComponent,
  LancamentoComponent,
  FuncionarioComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ]
})
export class FuncionarioModule { }
