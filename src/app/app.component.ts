import { Component } from '@angular/core';
import { ListaTarefasService } from './services/lista-tarefas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListaTarefasService]
})
export class AppComponent {
  title = 'lista-tarefas';
}
