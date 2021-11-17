import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  deleteTodo(todo: Todo) {
    /**
     * Give CSS some time to play delete animation.
     */
    setTimeout(() => {
      this.todos.forEach((x, i) => {
        if (x.id === todo.id) {
          this.todos.splice(i, 1);
          console.log(this.todos);
        }
      });
    }, 1000);
  }

  ngOnInit(): void {}
}
