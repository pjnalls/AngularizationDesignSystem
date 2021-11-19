import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() todos: Todo[] = [];

  text: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task.');
      return;
    }

    const dateTime = new Date();

    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: this.text,
      day: `${
        dateTime.getMonth() + 1
      }/${dateTime.getDate()} @ ${this.formatAMPM(dateTime)}`,
      added: true,
    };

    this.addTodo(newTodo);
  }

  addTodo(todo: Todo) {
    /**
     * Give CSS some time to play delete animation.
     */
    this.todos.push(todo);
  }

  updateInputText(text: string) {
    this.text = text;
  }

  formatAMPM(date: Date) {
    let hours = date.getHours(),
      minutes: any = date.getMinutes(),
      ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${ampm}`;
  }
}
