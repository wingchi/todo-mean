import Todo from '../models/todo.model'
import { Observable } from 'rxjs/Rx'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Response } from '@angular/http'
import { Injectable } from '@angular/core'

// RxJS operator for mapping the observable
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService {
  api_url = 'http://localhost:3000'
  todoUrl = `${this.api_url}/api/todos`

  constructor (
    private http: HttpClient
  ) { }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post(`${this.todoUrl}`, todo)
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todoUrl)
    .map(res => {
      return res["data"].docs as Todo[]
    })
  }

  editTodo(todo: Todo) {
    let editUrl = `${this.todoUrl}`
    return this.http.put(editUrl, todo)
  }

  deleteTodo(id: string): any {
    let deleteUrl = `${this.todoUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res => {
      return res
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
