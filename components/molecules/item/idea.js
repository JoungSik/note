const IdeaItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt={item.content} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.subTitle}</h6>
        <p className="card-text">{item.content}</p>
        <a href="#" className="card-link">상세보기</a>
        <a href="#" className="card-link">서비스보기</a>
      </div>
    </div>
  );
};

export default IdeaItem;
