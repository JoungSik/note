import styles from '../../../styles/container/idea.module.css'

import { IdeaItem } from '../../molecules/item/idea'
import { Item } from '../../../types/item'

type IdeaContainerProps = {
  items: Array<Item>
}

export const IdeaContainer = ({ items }: IdeaContainerProps) => {
  return (
    <section className={styles.section}>
      <div className={'container'}>
        <div className={styles.grid_container}>
          {
            items.map((item, i) =>
              <IdeaItem key={i} id={i}
                        title={item.title} subTitle={item.subTitle} content={item.content} image={item.image} />)
          }
        </div>
      </div>
    </section>
  )
};
