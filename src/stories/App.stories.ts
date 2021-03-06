import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from 'src/app/app.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { FormButtonComponent } from 'src/app/components/form-button/form-button.component';
import { FormInputComponent } from 'src/app/components/form-input/form-input.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TODOS } from 'src/app/mock-todos';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Angularization/Page/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        FormComponent,
        FormButtonComponent,
        FormInputComponent,
        TitleComponent,
        TodoComponent,
        TodoListComponent,
      ],
      imports: [CommonModule, FormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 0">${story}</div>`),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const App = Template.bind({});

App.args = {
  brand: 'Aº',
  appType: 'TODOs',
  todos: TODOS,
};
