import Todo from '../../models/todo.model'
import { initializeTodoState, TodoListState, TodoState } from './todo.state'
import * as TodoActions from './todo.action'

export type Action = TodoActions.All

const initialTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
]

const initialState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0,
}

export function TodoReducer(state = initialState, action: Action) {
  switch (action.type) {

    case TodoActions.types.GET_TODOS: {
      return {
        ...state,
        loaded: false,
        loading: true,
      }
    }
    case TodoActions.types.GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: [
          ...action.payload,
          defaultTodoStates[0],
        ],
        loading: false,
      }
    }
    case TodoActions.types.CREATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            todo.loading = true
          }
          return todo
        })
      }
    }
    case TodoActions.types.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (todo._id != "new")),
          {
            ...action.payload,
            edited: true
          },
          {
            ...Todo.generateMockTodo(),
            ...initializeTodoState()
          }
        ]
      }
    }
    case TodoActions.types.DELETE_TODO: {
      return {
        ...state,
        ...state.todos.splice(state.todos.indexOf(action.payload), 1) };
      }
    }
    case TodoActions.types.DELETE_TODO_SUCCESS: {
      return state
    }
    case TodoActions.types.DELETE_TODO_ERROR: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      }
    }
    case TodoActions.types.UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            todo.loading = true
          }
          return todo
        })
      }
    }
    case TodoActions.types.UPDATE_TODO_SUCCESS: {
      return modifyTodoState(state, action.payload, {})
    }
    case TodoActions.types.UPDATE_TODO_ERROR: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            todo.error = true
          }
          return todo
        })
      }
    }
    case TodoActions.types.COMPLETE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            todo.status = "done"
          }
          return todo
        })
      }
    }
    default: {
      return state
    }
  }
}

function modifyTodoState(state, newTodo: TodoState, modifications): TodoListState {
  return {
    ...state,
    todos: state.todos.map(todo => {
      if (todo._id === newTodo._id) {
        return { ...t, ...todo, ...modifications }
      } else {
        return todo
      }
    })
  }
}
