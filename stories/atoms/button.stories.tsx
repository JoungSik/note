import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, COLORS } from '../../components/atoms/button';

export default {
  title: 'atoms/button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  text: 'default',
  color: COLORS.primary,
  onClick: () => {
    console.log('onClick default');
  }
};
