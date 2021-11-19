import { Story, Meta } from '@storybook/angular/types-6-0';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TODOS } from 'src/app/mock-todos';

export default {
  title: 'Angularization/Todo/Todo',
  component: TodoComponent,
  layout: 'fullscreen',
} as Meta;

const Template: Story<TodoComponent> = (args: TodoComponent) => ({
  component: TodoComponent,
  props: args,
});

export const Todo = Template.bind({});

Todo.args = {
  todo: TODOS[0],
  todos: TODOS,
}