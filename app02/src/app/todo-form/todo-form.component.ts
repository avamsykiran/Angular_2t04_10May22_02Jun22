import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input()
  todo:Todo;

  @Input()
  isEditing:boolean;

  @Output()
  addTodoEvent:EventEmitter<Todo>;

  @Output()
  updateTodoEvent:EventEmitter<Todo>;

  @Output()
  cancelEditTodoEvent:EventEmitter<number>;

  constructor() {
    this.todo={id:0,task:'',status:'PENDING'};
    this.isEditing=false;
    this.addTodoEvent=new EventEmitter<Todo>();
    this.updateTodoEvent=new EventEmitter<Todo>();
    this.cancelEditTodoEvent=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    if(this.isEditing){
      this.updateTodoEvent.emit(this.todo);
    }else{
      this.addTodoEvent.emit(this.todo);
      this.todo={id:0,task:'',status:'PENDING'};
    }
  }

  raiseCancelEdit(){
    this.cancelEditTodoEvent.emit(this.todo.id);
  }
}
