import { ComponentStory, ComponentMeta } from '@storybook/react';
import faker from 'faker';

import { IdeaItem } from '../../../components/molecules/item/idea';

export default {
  title: 'Item/idea',
  component: IdeaItem,
  decorators: [
    (Story) => (
      <div style={{ width: '24em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: '아이디어 카드 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof IdeaItem>;

const Template: ComponentStory<typeof IdeaItem> = (args) => <IdeaItem {...args} />

export const Default = Template.bind({});
Default.args = {
  title: `프로젝트`,
  subTitle: '프로젝트에 대한 소제목 입니다.',
  content: '프로젝트에 대한 상세한 내용입니다.',
  image: faker.image.imageUrl(),
};
