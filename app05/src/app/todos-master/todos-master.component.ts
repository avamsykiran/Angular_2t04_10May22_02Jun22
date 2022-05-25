import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-master',
  templateUrl: './todos-master.component.html',
  styleUrls: ['./todos-master.component.css']
})
export class TodosMasterComponent implements OnInit {

  todos:Todo[];

  constructor(private todosService:TodosService) {
    this.todos=this.todosService.getAll();
  }
 
  ngOnInit(): void {
  }

  addTodo(todo:Todo) {
    this.todosService.add(todo);
    this.todos=this.todosService.getAll();
  }

  deleteTodo(id:number) {
    this.todosService.deleteById(id);
    this.todos=this.todosService.getAll();
  }

  markEditable(id:number){
    this.todos= this.todos.map(t => t.id!==id?t:{...t,isEditable:true});
  }

  unMarkEditable(id:number){
    this.todos= this.todos.map(t => t.id!==id?t:{...t,isEditable:undefined});
  }

  save(todo:Todo){
    this.todosService.update({...todo,isEditable:undefined});
    this.todos=this.todosService.getAll();
  }
}
