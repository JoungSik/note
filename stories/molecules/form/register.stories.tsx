import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RegisterForm } from '../../../components/molecules/form/register'

export default {
  title: 'Form/register',
  component: RegisterForm,
  parameters: {
    docs: {
      description: {
        component: '회원가입 폼 컴포넌트',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '36em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm />

export const Default = Template.bind({});
Default.args = {};
