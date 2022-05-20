import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo:Todo;

  @Output()
  addTodoEvent:EventEmitter<Todo>;

  constructor() {
    this.todo={id:0,task:'',status:'PENDING'};
    this.addTodoEvent=new EventEmitter<Todo>();
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.addTodoEvent.emit(this.todo);
    this.todo={id:0,task:'',status:'PENDING'};
  }
}
