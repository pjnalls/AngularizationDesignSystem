import { Component } from '@angular/core';
import { TODOS } from './mock-todos';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  brand: string = 'Aº';
  appType: string = 'TODOs';
  todos: Todo[] = TODOS;
}
