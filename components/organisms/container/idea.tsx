import { useState } from 'react'

import styles from '../../../styles/container/idea.module.css'
import { IdeaItem } from '../../molecules/item/idea'

interface item {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  image: string;
}

export const IdeaContainer = () => {
  const [items, setItems] = useState(Array<item>(0));
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
