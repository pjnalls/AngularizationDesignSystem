import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import type { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    id: 0,
    text: '',
    day: '',
  };
  @Input() todos: Todo[] = [];

  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();

  deleteBtnClicked: boolean = false;
  animationIsDelayed: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animationIsDelayed = true;
    }, 100);
  }

  onDelete(todo: Todo) {
    this.deleteBtnClicked = true;
    this.onDeleteTodo.emit(todo);
  }
}
