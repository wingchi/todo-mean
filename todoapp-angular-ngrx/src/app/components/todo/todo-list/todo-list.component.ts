import { TodoListState, TodoState } from "../../../store/todo/todo.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Rx";
import Todo from "../../../models/todo.model";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import * as TodoAction from "../../../store/todo/todo.action";

export interface AppState {
  todos: TodoListState;
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<TodoListState>) {}

  todoListState$: Observable<TodoState[]>;

  ngOnInit() {
    this.todoListState$ = this.store.select(state => state.todos);
    this.store.dispatch(new TodoAction.GetTodos());
  }

  onCreate(todo) {
    this.store.dispatch(new TodoAction.CreateTodo(todo));
  }

  onDelete(todo) {
    this.store.dispatch(new TodoAction.DeleteTodo(todo));
  }

  onEdit(todo) {
    this.store.dispatch(new TodoAction.UpdateTodo(todo));
  }

  onComplete(todo) {
    this.store.dispatch(new TodoAction.CompleteTodo(todo));
  }
}
