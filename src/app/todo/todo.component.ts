import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() public id!: number;
  @Input() public value!: string;
  @Input() public isDone!: boolean;
  @Output() private removeTodo = new EventEmitter<number>();
  @Output() private editTodo = new EventEmitter<{ id: number, newValue: string }>();
  @Output() private toggleTodo = new EventEmitter<number>();

  public newValue!: string;

  public reviewMode: boolean;

  constructor(private todosService: TodosService) {
    this.reviewMode = true;
    this.newValue = '';
  }

  onClickOpenEditTodo(): void {
    this.reviewMode = false;
    this.newValue = this.value;
  }

  onClickCancelEditTodo(): void {
    this.reviewMode = true;
    this.newValue = '';
  }

  onClickRemoveTodo(): void {
    this.removeTodo.emit(this.id);
  }

  onClickSaveTodo(): void {
    if (this.newValue) {
      if (this.newValue !== this.value) {
        this.editTodo.emit({id: this.id, newValue: this.newValue});
      }
      this.reviewMode = true;
      this.newValue = '';
    }
  }

  onToggleTodo(): void {
    this.toggleTodo.emit(this.id);
  }

  ngOnInit(): void {
  }
}
