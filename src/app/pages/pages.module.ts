import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { DetalheListComponent } from './detalhe-list/detalhe-list.component';
import { HomeComponent } from './home/home.component';
import { EditListaComponent } from './edit-lista/edit-lista.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    NovaTarefaComponent,
    DetalheListComponent,
    HomeComponent,
    EditListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    DetalheListComponent,
    NovaTarefaComponent,
    EditListaComponent
  ]
})
export class PagesModule { }
