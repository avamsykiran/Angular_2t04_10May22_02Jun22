import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, task: 'Pay Electricity Bill', status: 'DONE' },
      { id: 2, task: 'Book Medicines', status: 'PENDING' },
      { id: 3, task: 'Book Daughter`s stationary', status: 'DONE' },
      { id: 4, task: 'Purchase Grocessaries', status: 'PENDING' },
      { id: 5, task: 'Order Gas Cylinder', status: 'DONE' },
      { id: 6, task: 'Repair Daughter`s scooty', status: 'PENDING' },
      { id: 7, task: 'Order Dog Feed', status: 'PENDING' },
      { id: 8, task: 'Order Birthday Cake', status: 'DONE' }
    ];
  }

  getAll():Todo[]{
    return this.todos;
  }

  getById(id:number):Todo|undefined{
    return this.todos.find(t => t.id==id);
  }

  deleteById(id:number):void{
    this.todos = this.todos.filter(t=> t.id!=id);
  }

  add(todo:Todo):void{
    this.todos = [...this.todos,todo];
  }

  update(todo:Todo):void {
    this.todos = this.todos.map(t=> t.id!=todo.id?t:{...todo});
  }
}
