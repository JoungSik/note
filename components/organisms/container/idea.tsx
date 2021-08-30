import { useState } from 'react'
import faker from 'faker'

import styles from '../../../styles/container/idea.module.css'
import IdeaItem from '../../molecules/item/idea'

const IdeaContainer = ({}) => {
  const [items, setItems] = useState(Array(12).map((_, index) => ({
    id: index,
    title: `이름 - ${index}`,
    subTitle: '소제목',
    content: '내용',
    image: faker.image.imageUrl(),
  })));

  return (
    <section className={styles.section}>
      <div className={'container'}>
        <div className={styles.grid_container}>
          {
            items.map((item, i) =>
              <IdeaItem key={i}
                        title={item.title} subTitle={item.subTitle} content={item.content} image={item.image} />)
          }
        </div>
      </div>
    </section>
  )
};

export default IdeaContainer;
