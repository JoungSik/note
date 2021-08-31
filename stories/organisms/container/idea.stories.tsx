import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IdeaContainer } from '../../../components/organisms/container/idea';

export default {
  title: 'Container/idea',
  component: IdeaContainer,
  parameters: {
    docs: {
      description: {
        component: '아이디어 카드 컨테이너 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof IdeaContainer>;

const Template: ComponentStory<typeof IdeaContainer> = (args) => <IdeaContainer />

export const Default = Template.bind({});
