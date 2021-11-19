import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from 'src/app/components/title/title.component';

export default {
  title: 'Angularization/Title',
  component: TitleComponent,
  layout: 'fullscreen',
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  component: TitleComponent,
  props: args,
});

export const Title = Template.bind({});

Title.args = {
  brand: 'A°',
  appType: 'Design System',
}

