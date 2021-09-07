import { ComponentStory, ComponentMeta } from '@storybook/react';
import faker from 'faker';

import { IdeaItem } from '../../../components/molecules/item/idea';
import { Tag } from '../../../types/tag';

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

const tags = new Array<Tag>(0);
tags.push(new Tag(1, '온라인'));
tags.push(new Tag(2, '웹서비스'));

const Template: ComponentStory<typeof IdeaItem> = (args) => <IdeaItem {...args} />

export const Default = Template.bind({});
Default.args = {
  title: `프로젝트`,
  content: '프로젝트에 대한 상세한 내용입니다.',
  image: faker.image.imageUrl(),
  tags: tags
};
