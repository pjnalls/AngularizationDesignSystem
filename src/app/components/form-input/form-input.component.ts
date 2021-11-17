import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTodo: boolean = true;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task.');
      return;
    }

    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
