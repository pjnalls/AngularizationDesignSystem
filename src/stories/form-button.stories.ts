import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormButtonComponent } from 'src/app/components/form-button/form-button.component';

export default {
  title: 'Form/Button',
  component: FormButtonComponent,
  parameters: {
    layout: 'centered',
  }
} as Meta;

const Template: Story<FormButtonComponent> = (args: FormButtonComponent) => ({
  component: FormButtonComponent,
  props: args,
});

export const FormButton = Template.bind({});
