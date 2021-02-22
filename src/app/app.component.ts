import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Array<Todo>;
  public newTodoValue: string;

  constructor(private todosService: TodosService) {
    this.todos = todosService.getTodos();
    this.newTodoValue = '';
    // console.log(this.todos);
  }

  removeTodo(id: number): void {
    this.todos = this.todosService.removeTodo(id);
  }

  editTodo(value: { id: number, newValue: string }): void {
    this.todos = this.todosService.editTodo(value.id, value.newValue);
  }

  toggleTodo(id: number): void {
    this.todos = this.todosService.toggleTodo(id);
  }

  addTodo(): void {
    if (this.newTodoValue) {
      this.todos = this.todosService.addTodo(this.newTodoValue);
      this.newTodoValue = '';
    }
  }
}
