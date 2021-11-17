import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    text: '',
    day: '',
    reminder: true,
  };

  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo) {
    this.onToggleReminder.emit(todo);
  }
}
