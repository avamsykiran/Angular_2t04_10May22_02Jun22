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

}
