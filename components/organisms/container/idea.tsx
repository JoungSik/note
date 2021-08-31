import { useEffect, useState } from 'react'
import faker from 'faker'

import styles from '../../../styles/container/idea.module.css'
import IdeaItem from '../../molecules/item/idea'

interface item {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  image: string;
}

const IdeaContainer = () => {
  const [items, setItems] = useState(Array<item>(0));

  useEffect(() => {
    const temp = new Array<item>(0);
    for (let i = 0; i < 12; i++) {
      temp.push({
        id: i,
        title: `이름 - ${i}`,
        subTitle: '소제목',
        content: '내용',
        image: faker.image.imageUrl(),
      });
    }
    setItems(temp);
  }, []);

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
