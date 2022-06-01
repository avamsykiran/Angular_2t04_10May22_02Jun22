import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit,OnChanges {

  @Input()
  todo!:Todo;

  @Input()
  isEditing:boolean;

  @Output()
  addTodoEvent:EventEmitter<Todo>;

  @Output()
  updateTodoEvent:EventEmitter<Todo>;

  @Output()
  cancelEditTodoEvent:EventEmitter<number>;

  todoForm:FormGroup;

  idFC:FormControl;
  taskFC:FormControl;
  statusFC:FormControl;

  constructor() {  
    this.isEditing=false;
    this.addTodoEvent=new EventEmitter<Todo>();
    this.updateTodoEvent=new EventEmitter<Todo>();
    this.cancelEditTodoEvent=new EventEmitter<number>();

    this.idFC=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.taskFC=new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(200)]);
    this.statusFC=new FormControl('PENDING',[Validators.required]);

    this.todoForm=new FormGroup({id:this.idFC,task:this.taskFC,status:this.statusFC});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isEditing){
      this.todoForm.setValue(this.todo);
    }
  }

  ngOnInit(): void {
    
  }

  formSubmitted(){
    this.todo = this.todoForm.value;
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
