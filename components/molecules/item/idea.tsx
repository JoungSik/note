import { Item } from '../../../types/item'

export const IdeaItem = (item: Item) => {
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.content}</p>
        {
          item.link !== undefined &&
          <a href={item.link} className="card-link">서비스보기</a>
        }
        <footer className="footer fw-lighter my-2">
          {
            item.tags.map(tag =>
              <>
                <span key={tag.id} className={'text-decoration-underline'}>#{tag.name}</span>
                {' '}
              </>
            )
          }
        </footer>
      </div>
    </div>
  );
};
