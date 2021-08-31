import { ComponentStory, ComponentMeta } from '@storybook/react'
import faker from 'faker'

import { IdeaContainer } from '../../../components/organisms/container/idea'
import { Item } from '../../../types/item';

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
  temp.push({
    id: i,
    title: `이름 - ${i}`,
    subTitle: '소제목',
    content: '내용',
    image: faker.image.imageUrl(),
  });
}

export const Default = Template.bind({});
Default.args = {
  items: temp
};
