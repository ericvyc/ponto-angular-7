import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components';
import { LancamentoComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListagemComponent,
    LancamentoComponent
  ]
})
export class FuncionarioModule { }
