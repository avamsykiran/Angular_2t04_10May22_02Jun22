import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://localhost:9999/todos"; 
  }

  getAll():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getById(id:number):Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.apiUrl}/${id}`);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  add(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl,todo);
  }

  update(todo:Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(this.apiUrl,todo);
  }
}
