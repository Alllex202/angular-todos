import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Array<Todo>;

  constructor() {
    this.todos = [
      {value: 'qwe', id: Math.random(), isDone: true},
      {value: 'asd', id: Math.random(), isDone: false},
      {value: 'zxc', id: Math.random(), isDone: false},
      {value: 'кен', id: Math.random(), isDone: false},
      {value: 'апр', id: Math.random(), isDone: false},
      {value: 'мит', id: Math.random(), isDone: false},
      {value: 'uio', id: Math.random(), isDone: false},
      {value: 'jkl', id: Math.random(), isDone: false},
    ];
  }

  getTodos(): Array<Todo> {
    return this.todos.slice();
  }

  addTodo(todoValue: string): Array<Todo> {
    this.todos.unshift(new Todo(Math.random(), todoValue, false));
    return this.getTodos();
  }

  removeTodo(id: number): Array<Todo> {
    this.todos = this.todos.filter(t => t.id !== id);
    return this.getTodos();
  }

  editTodo(id: number, newValue: string): Array<Todo> {
    for (const todo of this.todos) {
      if (todo.id === id) {
        todo.value = newValue;
      }
    }
    return this.getTodos();
  }

  toggleTodo(id: number): Array<Todo> {
    for (const todo of this.todos) {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
    }
    return this.getTodos();
  }
}
