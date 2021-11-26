import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ListaTarefas } from 'src/app/models/lista-tarefas.model';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosLista$?: Observable<ListaTarefas[]>;
  subs?: Subscription;

  displayedColumns: string[] = [ 'title', 'description'];

  constructor( private listaTarefasService: ListaTarefasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dadosLista$ = this.listaTarefasService.getAll()
    this.dadosLista$.subscribe({
      next: () => console.log("Dados chegaram"),
      error: (error) => console.log(error),
      complete: () => console.log("Acesso ok!")
    },);  
  }

  edit(tarefas: ListaTarefas){
    this.router.navigate(['edit-list/' + tarefas.id]);
  }

  delete(id: any){
    this.listaTarefasService.delete(id)
      .subscribe({
        next: () => this.router.navigate(['tarefas']),
        error: (error) => console.log(error),
        complete: () => console.log("Acesso ok!")
      },);
  }

}
