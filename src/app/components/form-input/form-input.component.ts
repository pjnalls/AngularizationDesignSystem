import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Output() onChangedInput: EventEmitter<string> = new EventEmitter();
  text: string = '';

  onChange(event: any) {
    this.onChangedInput.emit(event.target.value);
  }

  constructor() {}
}
