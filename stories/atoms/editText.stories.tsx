import { ComponentStory, ComponentMeta } from '@storybook/react';
import faker from 'faker';

import { EditText } from '../../components/atoms/editText';

export default {
  title: 'atoms/editText',
  component: EditText,
} as ComponentMeta<typeof EditText>;

const Template: ComponentStory<typeof EditText> = (args) => <EditText {...args} />

export const Default = Template.bind({});
Default.args = {
  title: 'default',
  type: 'text',
  name: 'text',
  onChangeValue: (value) => {
    console.log(value);
  }
};

export const Email = Template.bind({});
Email.args = {
  ...Default.args,
  title: '이메일',
  type: 'email',
  name: 'email',
  defaultValue: faker.internet.email(),
  onChangeValue: (value) => {
    console.log(value);
  }
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  title: '비밀번호',
  type: 'password',
  name: 'password',
  defaultValue: faker.internet.password(),
  onChangeValue: (value) => {
    console.log(value);
  }
};
