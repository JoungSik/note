import { ComponentStory, ComponentMeta } from '@storybook/react'
import faker from 'faker'

import { IdeaContainer } from '../../../components/organisms/container/idea'
import { Item } from '../../../types/item';
import { Tag } from '../../../types/tag';

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

const Template: ComponentStory<typeof IdeaContainer> = (args) => <IdeaContainer {...args} />

const temp = new Array<Item>(0);
for (let i = 1; i < 12; i++) {
  const tags = new Array<Tag>(0);
  tags.push(new Tag(i + 1, '온라인'));
  tags.push(new Tag(i + 2, '웹서비스'));

  temp.push(new Item(i, `이름 - ${i}`, '내용', faker.image.imageUrl(), undefined, tags));
}

export const Default = Template.bind({});
Default.args = {
  items: temp
};
