import { TodoState } from './todo.state'

import Todo from '../../models/todo.model'

import { Action } from '@ngrx/store'

export const types = {
  CREATE_TODO: '[Todo] CREATE_TODO',
  CREATE_TODO_SUCCESS: '[Todo] CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR: '[Todo] CREATE_TODO_ERROR',

  GET_TODO: '[Todo] GET_TODO',
  GET_TODO_SUCCESS: '[Todo] GET_TODO_SUCCESS',
  GET_TODO_ERROR: '[Todo] GET_TODO_ERROR',

  UPDATE_TODO: '[Todo] UPDATE_TODO',
  UPDATE_TODO_SUCCESS: '[Todo] UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR: '[Todo] UPDATE_TODO_ERROR',

  GET_TODOS: '[Todo] GET_TODOS',
  GET_TODOS_SUCCESS: '[Todo] GET_TODOS_SUCCESS',
  GET_TODOS_ERROR: '[Todo] GET_TODOS_ERROR',

  DELETE_TODO: '[Todo] DELETE_TODO',
  DELETE_TODO_SUCCESS: '[Todo] DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR: '[Todo] DELETE_TODO_ERROR',

  COMPLETE_TODO: '[Todo] COMPLETE_TODO',
}

// Get Todos
export class GetTodos implements Action {
  readonly type = types.GET_TODOS
}

export class GetTodosSuccess implements Action {
  readonly type = types.GET_TODOS_SUCCESS

  constructor(public payload: todostate[]){}
}

export class GetTodosError implements Action {
  readonly type = types.GET_TODOS_ERROR
}

// Create Todo
export class CreateTodo implements Action {
  readonly type = types.CREATE_TODO

  constructor(public payload: Todo){}
}

export class CreateTodoSuccess implements Action {
  readonly type = types.CREATE_TODO_SUCCESS

  constructor(public payload: TodoState){}
}

export class CreateTodoError implements Action {
  readonly type = types.CREATE_TODO_ERROR
}

export class GetTodo implements Action {
  readonly type = types.GET_TODO

  constructor(payload: string){}
}

export class GetTodoSuccess implements Action {
  readonly type = types.GET_TODO_SUCCESS

  constructor(public payload: Todo){}
}

export class GetTodoError implements Action {
  readonly type = types.GET_TODO_ERROR
}

// Update Todo
export class UpdateTodo implements Action {
  readonly type = types.UPDATE_TODO

  constructor(public payload: TodoState){}
}

export class UpdateTodoSuccess implements Action {
  readonly type = types.UPDATE_TODO_SUCCESS

  constructor(public payload: TodoState){}
}

export class UpdateTodoError implements Action {
  readonly type = types.UPDATE_TODO_ERROR

  constructor(public payload: TodoState){}
}

// Delete Todo
export class DeleteTodo implements Action {
  readonly type = types.DELETE_TODO

  constructor(public payload: TodoState){}
}

export class DeleteTodoSuccess implements Action {
  readonly type = types.DELETE_TODO_SUCCESS

  constructor(public payload: TodoState){}
}

export class DeleteTodoError implements Action {
  readonly type = types.DELETE_TODO_ERROR

  constructor(public payload: TodoState){}
}

// Complete Todo
export class CompleteTodo implements Action {
  readonly type = types.COMPLETE_TODO

  constructor(public payload: TodoState){}
}

export type All = GetTodos | GetTodosSuccess | GetTodosError |
  UpdateTodo | UpdateTodoSuccess | UpdateTodoError |
  GetTodo | GetTodoSuccess | GetTodoError |
  CreateTodo | CreateTodoSuccess | CreateTodoError |
  DeleteTodo | DeleteTodoSuccess | DeleteTodoError |
  CompleteTodo
