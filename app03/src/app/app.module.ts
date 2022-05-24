import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosMasterComponent } from './todos-master/todos-master.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoFormComponent } from './todo-form/todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosMasterComponent,
    TodoDetailsComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
