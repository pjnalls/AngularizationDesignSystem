import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormInputComponent } from 'src/app/components/form-input/form-input.component';

export default {
  title: 'Angularization/Form/Input',
  component: FormInputComponent,
  parameters: {
    layout: 'centered',
  }
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => ({
  component: FormInputComponent,
  props: args,
});

export const Input = Template.bind({});