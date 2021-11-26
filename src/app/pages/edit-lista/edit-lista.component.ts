import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';
import { ListaTarefas } from 'src/app/models/lista-tarefas.model';

@Component({
  selector: 'app-edit-lista',
  templateUrl: './edit-lista.component.html',
  styleUrls: ['./edit-lista.component.css']
})
export class EditListaComponent implements OnInit {

  id: String = '';
  productForm!: FormGroup;
  title: String = '';
  description: String = '';
  isLoadingResults = false;
  editList!: ListaTarefas;


  constructor(private router: Router, private route: ActivatedRoute, private api: ListaTarefasService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getTarefas(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
    'id' : [null, Validators.required],  
    'title' : [null, Validators.required],
    'description' : [null, Validators.required]
  });
}

getTarefas(id: any) {
  
  this.api.getById(id).subscribe(data => {
    console.log(data);
    this.productForm.setValue({
      id: data.id,
      title: data.title,
      description: data.description
    });
  });
}

updateProduto(form: NgForm) {
  this.isLoadingResults = true;
  this.api.update(form)
      .subscribe({
        next: () => this.router.navigate(['tarefas']),
        error: (error) => console.log(error),
        complete: () => console.log("Atualização ok!")
      },);
}

}
