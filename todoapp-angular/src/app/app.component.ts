import { Response } from '@angular/http'
import { TodoService } from './services/todo.service'
import ToDo from './models/todo.model'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private todoService: TodoService
  ) {}

  public newTodo: ToDo = new ToDo()

  todosList: ToDo[]

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(todos => {
      this.todosList = todos
      console.log(todos)
    })
  }
}
