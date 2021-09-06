import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm } from '../../../components/molecules/form/login'

export default {
  title: 'Form/login',
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: '로그인 폼 컴포넌트',
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
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />

export const Default = Template.bind({});
Default.args = {};
