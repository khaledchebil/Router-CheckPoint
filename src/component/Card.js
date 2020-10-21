import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Card({name, Genre, Review, picUrl, id}) {
  return (
 
 <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 line link list p10 ">
  <Link to={`/app/${id}`}>
      <img src={picUrl} alt='ths is the ' height='300px'/>
   <div className='line link list p10 acc' >
      <h2>{name}</h2>
      <p>{Genre}</p>
      <p>{Review}</p>
    
      </div>
      </Link>
    
    </div>
  );
}

export default Card;
