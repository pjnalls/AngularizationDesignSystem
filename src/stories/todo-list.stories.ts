import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TODOS } from 'src/app/mock-todos';

export default {
  title: 'Angularization/Todo/List',
  component: TodoListComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [TodoListComponent, TodoComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TodoListComponent> = (args: TodoListComponent) => ({
  component: TodoListComponent,
  props: args,
});

export const List = Template.bind({});

List.args = {
  todos: TODOS,
};
