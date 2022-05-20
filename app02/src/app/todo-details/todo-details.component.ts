import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input()
  todo!:Todo;

  @Output()
  deleteTodoEvent:EventEmitter<number>;

  constructor() {
    this.deleteTodoEvent=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  raiseDeleteEvent(){
    this.deleteTodoEvent.emit(this.todo.id);
  }
}
