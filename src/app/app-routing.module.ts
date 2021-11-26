import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheListComponent } from './pages/detalhe-list/detalhe-list.component';
import { EditListaComponent } from './pages/edit-lista/edit-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { NovaTarefaComponent } from './pages/nova-tarefa/nova-tarefa.component';

const routes: Routes = [
  {path: 'tarefas', component: HomeComponent, data: { title: 'Lista de Tarefas' }},
  {path: 'lista-detalhe/:id', component: DetalheListComponent, data: { title: 'Detalhe da tarefa'}},
  {path: 'nova-tarefa', component: NovaTarefaComponent, data: { title: 'Adicionar Tarefa'}},
  {path: 'edit-list/:id', component: EditListaComponent, data: { title: 'Editar item lista'}},
  {path: '', redirectTo: 'tarefas', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
