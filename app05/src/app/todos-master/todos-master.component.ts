import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-master',
  templateUrl: './todos-master.component.html',
  styleUrls: ['./todos-master.component.css']
})
export class TodosMasterComponent implements OnInit {

  todos!:Todo[];
  errMsg!:string;

  constructor(private todosService:TodosService) {
    
  }

  loadData(){
    this.todosService.getAll().subscribe({
      next: data => this.todos=data,
      error: err => {console.error(err);this.errMsg="Unable to laod data! Please again later!";}
    });
  }
 
  ngOnInit(): void {
    this.loadData();
  }

  addTodo(todo:Todo) {
    this.todosService.add(todo).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err);this.errMsg="Unable to save data! Please again later!";}
    })
  }

  deleteTodo(id:number) {
    this.todosService.deleteById(id).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err);this.errMsg="Unable to delete data! Please again later!";}
    })
  }

  markEditable(id:number){
    this.todos= this.todos.map(t => t.id!==id?t:{...t,isEditable:true});
  }

  unMarkEditable(id:number){
    this.todos= this.todos.map(t => t.id!==id?t:{...t,isEditable:undefined});
  }

  save(todo:Todo){
    this.todosService.update({...todo,isEditable:undefined}).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err);this.errMsg="Unable to save data! Please again later!";}
    })
  }
}
