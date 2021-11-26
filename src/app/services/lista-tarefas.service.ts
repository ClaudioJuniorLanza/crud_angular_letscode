import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ListaTarefas } from '../models/lista-tarefas.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://madsti.com.br:9099/todos';

@Injectable({
  providedIn: 'root'
})
export class ListaTarefasService {

  constructor(private http: HttpClient, private dataBase: AngularFireDatabase) { }

  insert(listaTarefas: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa("admin:password")
      })
    };
    console.log(listaTarefas);
    return this.http.post<ListaTarefas[]>(apiUrl, listaTarefas, httpOptions);
  }

  update(listaTarefas: any ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa("admin:password"),
        'Accept': '*/*'
      })
    };
    console.log(listaTarefas);
    return this.http.put(apiUrl, listaTarefas, httpOptions);
      
  }

  getAll() {
    return this.http.get<ListaTarefas[]>(apiUrl)
  }

  getById(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa("admin:password")
      })
    };
    const url = `${apiUrl}/${id}`;
    return this.http.get<ListaTarefas>(url, httpOptions);
  }

  delete(id: any){

    const head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    head.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    head.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    head.append('Access-Control-Allow-Credentials', 'true');
    head.append('Content-Type', 'application/json');
    head.append('Authorization', 'Basic ' + btoa("admin:password"));
    head.append('Accept', '*/*');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa("admin:password"),
        'Accept': '*/*'
      })
    };
    const url = `${apiUrl}/${id}`;
    return this.http.delete<ListaTarefas>(url, {headers: head});
  }

}
