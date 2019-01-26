import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from "@angular/material";

import {
  CadastrarPjComponent,
  CadastroPjComponent
} from './components';

import { SharedModule } from "../../shared/shared.module";

import { CadastroPjService } from "./services";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  providers: [
    CadastroPjService
  ]
})
export class CadastroPjModule { }
