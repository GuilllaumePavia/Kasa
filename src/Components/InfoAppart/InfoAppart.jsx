import React from 'react'
import './InfoAppart.css';
import StarRating from '../Star/StarRating';
import Data from '../../Data/logements.json';
import {useParams} from "react-router-dom"

export default function InfoAppart(props) {

  const id = useParams().id


  return (
    <div className='conteneur'>
 

      <div className='conteneur1'>
           <h2 className='appart-titre'>{props.title}</h2>
           <h4 className='appart-ville'>{props.location}</h4>
           <div className='appart-tag'>
      {props.tags.map((tag, index) => <div className='tag' key={index}>{tag}</div>)}
           </div>

      </div>


       <div className='conteneur2'>
            <div className='appart-metro-photo'>
                <h4 className='appart-metro'>{props.name}</h4>  
                <img src={props.picture} alt="Propriétaire" className='appart-photo' />
            </div>
            <StarRating rate={Data[id].rating} />
            
       </div>


    </div>
  )
}
