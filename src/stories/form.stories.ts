import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormButtonComponent } from 'src/app/components/form-button/form-button.component';
import { FormInputComponent } from 'src/app/components/form-input/form-input.component';
import { FormComponent } from 'src/app/components/form/form.component';

export default {
  title: 'Angularization/Form',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormComponent, FormInputComponent, FormButtonComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 0">${story}</div>`),
  ],
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  component: FormComponent,
  props: args,
});

export const Form = Template.bind({});