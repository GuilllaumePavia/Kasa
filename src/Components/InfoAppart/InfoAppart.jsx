import React from 'react'
import './InfoAppart.css';
import StarRating from '../Star/StarRating';

export default function InfoAppart(props) {
  return (
    <div className='conteneur'>
 

       <div className='conteneur1'>
           <h2 className='appart-titre'>{props.title}</h2>
           <h4 className='appart-ville'>{props.location}</h4>
           <div className='appart-tag'>
      {props.tags.map(tag => <div className='tag'>{tag}</div>)}
      </div>

    </div>



       <div className='conteneur2'>
            <div className='appart-metro-photo'>
                <h4 className='appart-metro'>{props.name}</h4>  
                <img src={props.picture} alt="Propriétaire" className='appart-photo' />
            </div>
            <StarRating rate={props.rate}/>
       </div>


    </div>
  )
}
