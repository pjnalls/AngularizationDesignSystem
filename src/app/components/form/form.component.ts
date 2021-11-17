import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
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
