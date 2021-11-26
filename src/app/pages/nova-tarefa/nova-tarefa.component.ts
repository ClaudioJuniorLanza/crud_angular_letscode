import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  productForm!: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ListaTarefasService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  addProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.insert(form)
      .subscribe({
      next: () => this.router.navigate(['/tarefas']),
      error: (error) => error.status == 201 ? this.router.navigate(['/tarefas']) : console.log(error),
      complete: () => console.log("Acesso ok!")
    },);
  
  }

}
