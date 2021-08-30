import React from 'react'

interface props {
  image: string;
  content: string;
  title: string;
  subTitle: string;
}

const IdeaItem: React.FC<props> = ({title, subTitle, content, image}) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={content} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
        <p className="card-text">{content}</p>
        <a href="#" className="card-link">상세보기</a>
        <a href="#" className="card-link">서비스보기</a>
      </div>
    </div>
  );
};

export default IdeaItem;
