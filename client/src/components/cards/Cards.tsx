// Card.tsx

import React from 'react';
import './cards.css'; 

interface CardProps {
  title: string;
  topic:string;
  url: string;
  sector:string;
  published:string;
  added:string;

}

const Card: React.FC<CardProps> = ({ title,topic, url,sector,published,added }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <h3> <span>Sector:-</span>{sector}</h3>
      <h3><span>Topic:-</span>{topic}</h3>
      <h3><span>Published on:-</span>{published}</h3>
      <h3><span>Added on:-</span>{added}</h3>
      <a href={url} className='card-content' >{url}</a>
    </div>
  );
};

export default Card;
